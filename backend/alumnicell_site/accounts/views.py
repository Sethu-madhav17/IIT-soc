from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login
from .serializers import RegisterSerializer, UserSerializer, AlumniProfileSerializer
from .models import User, AlumniProfile
from rest_framework.permissions import IsAuthenticated
from django.db import models 
from rest_framework.exceptions import NotFound

class RegisterAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token.key,
            "message": "User registered successfully."
        }, status=status.HTTP_201_CREATED)

class LoginAPIView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username=username, password=password)

        if user:
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                "user": UserSerializer(user).data,
                "token": token.key
            }, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid Credentials"}, status=status.HTTP_400_BAD_REQUEST)

class UserProfileAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user

class AlumniProfileDetailAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = AlumniProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        try:
            return self.request.user.alumni_profile
        except AlumniProfile.DoesNotExist:
            raise NotFound(detail="Alumni profile not found for this user.")


class AlumniListAPIView(generics.ListAPIView):
    queryset = AlumniProfile.objects.filter(is_verified=True).select_related('user') # Prefetch user data
    serializer_class = AlumniProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = super().get_queryset()
        
        grad_year = self.request.query_params.get('graduation_year')
        if grad_year:
            queryset = queryset.filter(graduation_year=grad_year)
        
        search_query = self.request.query_params.get('search')
        if search_query:
            queryset = queryset.filter(
                models.Q(user__first_name__icontains=search_query) |
                models.Q(user__last_name__icontains=search_query) |
                models.Q(current_profession__icontains=search_query) |
                models.Q(current_company__icontains=search_query) |
                models.Q(department__icontains=search_query)
            )
        return queryset