from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

class User(AbstractUser):
    # If you need to add any fields directly to the main User model, add them here.
    # Otherwise, this can remain empty, inheriting all fields from AbstractUser.
    pass

class AlumniProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='alumni_profile')
    graduation_year = models.IntegerField(null=True, blank=True)
    degree = models.CharField(max_length=100, null=True, blank=True)
    department = models.CharField(max_length=100, null=True, blank=True)
    current_profession = models.CharField(max_length=255, null=True, blank=True)
    current_company = models.CharField(max_length=255, null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    contact_number = models.CharField(max_length=20, null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    linkedin_profile = models.URLField(max_length=255, null=True, blank=True)
    personal_website = models.URLField(max_length=255, null=True, blank=True)
    is_verified = models.BooleanField(default=False) # Admin can verify alumni accounts
    is_featured_on_home = models.BooleanField(default=False, help_text="Check to feature this alumni on the homepage")

    def __str__(self):
        # Handle cases where user might be deleted or not yet fully linked
        return f"{self.user.username}'s Profile" if self.user else f"Profile for unlinked user ID: {self.pk}"