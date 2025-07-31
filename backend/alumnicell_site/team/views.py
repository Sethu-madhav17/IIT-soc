# team/views.py

from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action

from django.contrib.auth.models import User

from .models import Team, Role, TeamMember, Project, Task
from .serializers import (
    UserSerializer,
    RoleSerializer,
    TeamMemberSerializer,
    TeamSerializer,
    ProjectSerializer,
    TaskSerializer
)

# --- Permissions (Basic Examples) ---
# We'll start with basic authentication. For more granular permissions (e.g.,
# "only team admins can modify members"), we'd create custom permission classes.

class IsAdminOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow admins of an object to edit it.
    Assumes the object has an 'owner' or 'created_by' field.
    """
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any authenticated request.
        if request.method in permissions.SAFE_METHODS:
            return request.user.is_authenticated # Read-only for authenticated users

        # Write permissions are only allowed to the admin user.
        # This is a basic example; you'd typically check for superuser or specific role.
        return request.user.is_superuser # Only superusers can modify

class IsTeamAdminOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow team members with an 'Admin' role to modify.
    Read access for any authenticated team member.
    """
    def has_permission(self, request, view):
        # Authenticated users can read
        if request.method in permissions.SAFE_METHODS:
            return request.user.is_authenticated
        
        # Write access requires being a member of *some* team with an 'Admin' role
        # This check is broad and might need to be refined per object later.
        return request.user.is_authenticated and TeamMember.objects.filter(
            user=request.user, role__name='Admin'
        ).exists()

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any authenticated team member.
        if request.method in permissions.SAFE_METHODS:
            # Check if the user is a member of the team related to the object
            if isinstance(obj, Team):
                return TeamMember.objects.filter(team=obj, user=request.user).exists()
            elif isinstance(obj, TeamMember):
                return TeamMember.objects.filter(team=obj.team, user=request.user).exists()
            elif isinstance(obj, Project):
                 return TeamMember.objects.filter(team=obj.team, user=request.user).exists()
            elif isinstance(obj, Task):
                 return TeamMember.objects.filter(project__team=obj.project.team, user=request.user).exists()
            
            return False # Default for other object types
            
        # Write permissions are only allowed to team members with 'Admin' role in that specific team.
        # Determine the team associated with the object
        team_id = None
        if isinstance(obj, Team):
            team_id = obj.id
        elif isinstance(obj, TeamMember):
            team_id = obj.team.id
        elif isinstance(obj, Project):
            team_id = obj.team.id
        elif isinstance(obj, Task):
            team_id = obj.project.team.id
        
        if team_id:
            return TeamMember.objects.filter(
                team_id=team_id, user=request.user, role__name='Admin'
            ).exists()
        
        return False # No team association found or handled


# --- ViewSets ---

# Note: For simple listing/retrieval that doesn't require user-specific data,
# permissions.AllowAny or permissions.IsAuthenticatedOrReadOnly could be used.
# But since you mentioned authentication for all, we'll start with IsAuthenticated.


class TeamViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows teams to be viewed or edited.
    """
    queryset = Team.objects.all().order_by('name')
    serializer_class = TeamSerializer
    permission_classes = [permissions.IsAuthenticated, IsTeamAdminOrReadOnly] # Only authenticated users, plus team admin for write ops

    def perform_create(self, serializer):
        # Automatically set the 'created_by' field to the current user
        serializer.save(created_by=self.request.user)

class RoleViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows roles to be viewed or edited.
    Typically, roles are managed by superusers.
    """
    queryset = Role.objects.all().order_by('name')
    serializer_class = RoleSerializer
    permission_classes = [permissions.IsAdminUser] # Only Django admin users can manage roles

class TeamMemberViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows team members to be viewed, added, or removed.
    This will be the primary endpoint for your frontend's team display.
    """
    queryset = TeamMember.objects.all().order_by('team__name', 'user__username')
    serializer_class = TeamMemberSerializer
    permission_classes = [permissions.IsAuthenticated, IsTeamAdminOrReadOnly] # Authenticated users can view, team admins can modify

    def get_queryset(self):
        # Optionally filter members by team if a team ID is passed as a query parameter
        # e.g., /api/team-members/?team_id=1
        queryset = super().get_queryset()
        team_id = self.request.query_params.get('team_id')
        if team_id is not None:
            queryset = queryset.filter(team__id=team_id)
        return queryset
    
    # Custom action to get members of a specific team
    # Example usage: /api/teams/{team_pk}/members/
    @action(detail=True, methods=['get'], serializer_class=TeamMemberSerializer,
            permission_classes=[permissions.IsAuthenticated])
    def members(self, request, pk=None):
        team = self.get_object() # This refers to the Team object based on pk
        members = team.memberships.all()
        # Ensure the request context is passed to the serializer for image URLs
        serializer = self.get_serializer(members, many=True, context={'request': request})
        return Response(serializer.data)


class ProjectViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows projects to be viewed or edited.
    """
    queryset = Project.objects.all().order_by('name')
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated, IsTeamAdminOrReadOnly] # Authenticated, team admin for write

    def perform_create(self, serializer):
        # Ensure the project lead is set (if provided) and user is part of the team
        # For simplicity, we'll just save it. More complex validation could go here.
        serializer.save()


class TaskViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows tasks to be viewed or edited.
    """
    queryset = Task.objects.all().order_by('due_date')
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated, IsTeamAdminOrReadOnly] # Authenticated, team admin for write

    def perform_create(self, serializer):
        # Automatically set assigned_to if not provided and it's the current user, or other logic
        serializer.save()