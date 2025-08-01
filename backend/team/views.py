# team/views.py

from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action

from accounts.models import User

from .models import Team, Role, TeamMember, Project, Task
from .serializers import (
    UserSerializer,
    RoleSerializer,
    TeamMemberSerializer,
    TeamSerializer,
    ProjectSerializer,
    TaskSerializer,
)

# --- Permissions ---

class IsAdminOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return request.user.is_authenticated
        return request.user.is_superuser

class IsTeamAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return request.user.is_authenticated
        return request.user.is_authenticated and TeamMember.objects.filter(
            user=request.user, role__name='Admin'
        ).exists()

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            if isinstance(obj, Team):
                return TeamMember.objects.filter(team=obj, user=request.user).exists()
            elif isinstance(obj, TeamMember):
                return TeamMember.objects.filter(team=obj.team, user=request.user).exists()
            elif isinstance(obj, Project):
                return TeamMember.objects.filter(team=obj.team, user=request.user).exists()
            elif isinstance(obj, Task):
                return TeamMember.objects.filter(project__team=obj.project.team, user=request.user).exists()
            return False
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
        return False


# --- ViewSets ---

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all().order_by('name')
    serializer_class = TeamSerializer
    permission_classes = [permissions.IsAuthenticated, IsTeamAdminOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all().order_by('name')
    serializer_class = RoleSerializer
    permission_classes = [permissions.IsAdminUser]

class TeamMemberViewSet(viewsets.ModelViewSet):
    # FIX: Simplify the queryset to TeamMember.objects.all().
    # The shell proved this works. The previous filter might be the problem.
    queryset = TeamMember.objects.all().order_by('team__name', 'user__username')
    serializer_class = TeamMemberSerializer
    # FIX: Allow anyone to view
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        team_id = self.request.query_params.get('team_id')
        if team_id is not None:
            queryset = queryset.filter(team__id=team_id)
        return queryset
    
    @action(detail=True, methods=['get'], serializer_class=TeamMemberSerializer,
            permission_classes=[permissions.IsAuthenticated])
    def members(self, request, pk=None):
        team = self.get_object()
        members = team.memberships.all()
        serializer = self.get_serializer(members, many=True, context={'request': request})
        return Response(serializer.data)


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('name')
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated, IsTeamAdminOrReadOnly]

    def perform_create(self, serializer):
        serializer.save()

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by('due_date')
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated, IsTeamAdminOrReadOnly]

    def perform_create(self, serializer):
        serializer.save()