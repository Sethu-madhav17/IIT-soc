from rest_framework import serializers
from .models import MissionVision, OfficialMessage
from accounts.serializers import AlumniProfileSerializer # Import AlumniProfileSerializer

class MissionVisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MissionVision
        fields = '__all__'

class OfficialMessageSerializer(serializers.ModelSerializer):
    profile_picture = serializers.ImageField(use_url=True) # Ensure image URL is returned

    class Meta:
        model = OfficialMessage
        fields = '__all__'

# No specific serializer for featured alumni here, we'll use AlumniProfileSerializer
# but will add a filter to the AlumniProfile model itself.