# team/serializers.py

from rest_framework import serializers
from .models import Team, Role, TeamMember, Project, Task
from accounts.models import User

# Serializer for the User model (if we need to expose limited user info)
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']

# Serializer for the Role model
class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['id', 'name', 'description']

# Serializer for TeamMember, aligning with frontend expectations
class TeamMemberSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    imageAlt = serializers.SerializerMethodField()
    description = serializers.CharField(source='role.name', read_only=True)
    imageSrc = serializers.SerializerMethodField()

    class Meta:
        model = TeamMember
        fields = [
            'id',
            'title',
            'imageAlt',
            'description',
            'imageSrc',
            'instagram_url',
            'linkedin_url',
            'team',
            'user',
        ]
        depth = 1 

    def get_title(self, obj):
        if obj.user:
            if obj.user.first_name and obj.user.last_name:
                return f"{obj.user.first_name} {obj.user.last_name}"
            return obj.user.username
        return ""

    def get_imageAlt(self, obj):
        return self.get_title(obj)

    def get_imageSrc(self, obj):
        if obj.profile_picture:
            request = self.context.get('request')
            if request is not None:
                return request.build_absolute_uri(obj.profile_picture.url)
            return obj.profile_picture.url
        return None

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name', 'description', 'created_at', 'updated_at', 'created_by']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'team', 'name', 'description', 'start_date', 'end_date', 'is_completed', 'project_lead']

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'project', 'assigned_to', 'title', 'description', 'due_date', 'status', 'priority']