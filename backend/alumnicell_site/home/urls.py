from django.urls import path
from .views import HomePageContentView

urlpatterns = [
    path('', HomePageContentView.as_view(), name='homepage_content'),
    
]