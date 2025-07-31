# team/serializers.py

from rest_framework import serializers
from .models import Team, Role, TeamMember, Project, Task
from accounts.models import User # <--- IMPORTANT CHANGE: Import your custom User model

# Serializer for the User model (if we need to expose limited user info)
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email'] # Only expose relevant user fields

# Serializer for the Role model
class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['id', 'name', 'description']

# Serializer for TeamMember, aligning with frontend expectations
class TeamMemberSerializer(serializers.ModelSerializer):
    # 'title' corresponds to the user's name
    title = serializers.SerializerMethodField()
    imageAlt = serializers.SerializerMethodField() # Same as title for alt text

    # 'description' corresponds to the member's role name
    description = serializers.CharField(source='role.name', read_only=True)

    # imageSrc will be the URL to the profile picture
    imageSrc = serializers.SerializerMethodField()

    class Meta:
        model = TeamMember
        fields = [
            'id', # Include ID for uniqueness/management on frontend
            'title',
            'imageAlt',
            'description',
            'imageSrc',
            'instagram_url',
            'linkedin_url',
            'team', # You might want to expose the team ID for context
            'user', # You might want to expose the user ID for context
        ]

    def get_title(self, obj):
        # Combines first name and last name, or falls back to username
        if obj.user.first_name and obj.user.last_name:
            return f"{obj.user.first_name} {obj.user.last_name}"
        return obj.user.username

    def get_imageAlt(self, obj):
        # Simply return the title for imageAlt
        return self.get_title(obj)

    def get_imageSrc(self, obj):
        # Check if a profile picture exists and return its absolute URL
        if obj.profile_picture:
            request = self.context.get('request')
            if request is not None:
                # Use request.build_absolute_uri to get the full URL including domain
                return request.build_absolute_uri(obj.profile_picture.url)
            return obj.profile_picture.url # Fallback if request context is not available
        return None # Or a default image URL if no picture is set (handled in frontend)

# Serializer for Team (if you need to list teams or get team details)
class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name', 'description', 'created_at', 'updated_at', 'created_by']

# Serializer for Project
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'team', 'name', 'description', 'start_date', 'end_date', 'is_completed', 'project_lead']

# Serializer for Task
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'project', 'assigned_to', 'title', 'description', 'due_date', 'status', 'priority']