# team/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'teams', views.TeamViewSet)
router.register(r'roles', views.RoleViewSet)
router.register(r'members', views.TeamMemberViewSet) # This will handle /api/members/
router.register(r'projects', views.ProjectViewSet)
router.register(r'tasks', views.TaskViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]