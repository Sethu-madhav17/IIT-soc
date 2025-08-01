from django.urls import path
from .views import RegisterAPIView, LoginAPIView, UserProfileAPIView, AlumniProfileDetailAPIView, AlumniListAPIView

urlpatterns = [
    path('register/', RegisterAPIView.as_view(), name='register'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('me/', UserProfileAPIView.as_view(), name='user_profile'),
    path('my-alumni-profile/', AlumniProfileDetailAPIView.as_view(), name='my_alumni_profile'),
    path('alumni/', AlumniListAPIView.as_view(), name='alumni_list'),
]