# home/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

from .models import MissionVision, OfficialMessage
from .serializers import MissionVisionSerializer, OfficialMessageSerializer
from accounts.models import AlumniProfile # Import AlumniProfile to get featured alumni
from accounts.serializers import AlumniProfileSerializer # Import its serializer

class HomePageContentView(APIView):
    """
    API endpoint to retrieve all dynamic content for the homepage.
    """
    permission_classes = [AllowAny] # Allow anyone to view homepage content

    def get(self, request, *args, **kwargs):
        data = {}

        # 1. Mission & Vision
        try:
            mv_instance = MissionVision.objects.first()
            if mv_instance:
                data['mission_vision'] = MissionVisionSerializer(mv_instance).data
            else:
                data['mission_vision'] = {}
        except Exception as e:
            data['mission_vision'] = {"error": f"Could not retrieve Mission/Vision: {e}"}

        # 2. Official Messages (Dean, Director)
        official_messages = OfficialMessage.objects.all()
        # IMPORTANT: Pass context={'request': request} to ensure absolute URLs for images
        data['official_messages'] = OfficialMessageSerializer(official_messages, many=True, context={'request': request}).data

        # 3. Featured Alumni
        # Filter for verified and featured alumni, and select a limited number (e.g., 5)
        featured_alumni = AlumniProfile.objects.filter(is_verified=True, is_featured_on_home=True).select_related('user')[:5]
        
        # IMPORTANT: Pass context={'request': request} to AlumniProfileSerializer
        # This will ensure profile_picture URLs are absolute.
        serialized_alumni = AlumniProfileSerializer(featured_alumni, many=True, context={'request': request}).data
        
        # Clean up featured_alumni to only send necessary fields like profile_picture and name
        # The frontend uses login_image for src, and maybe name for alt or tooltip
        cleaned_featured_alumni = []
        for alumni_profile_data in serialized_alumni:
            user_data = alumni_profile_data.get('user', {})
            cleaned_featured_alumni.append({
                'id': alumni_profile_data['id'],
                # profile_picture will now be the absolute URL from the serializer
                'profile_picture': alumni_profile_data.get('profile_picture'), 
                'first_name': user_data.get('first_name'),
                'last_name': user_data.get('last_name'),
                # Add other fields if needed by the frontend for display here
            })
        data['featured_alumni'] = cleaned_featured_alumni

        return Response(data, status=status.HTTP_200_OK)