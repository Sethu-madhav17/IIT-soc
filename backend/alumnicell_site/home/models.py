from django.db import models

class MissionVision(models.Model):
    """
    Model to store the Mission and Vision statements for the homepage.
    There should typically only be one instance of this model.
    """
    mission_text = models.TextField()
    vision_text = models.TextField()
    last_updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Mission & Vision"
        verbose_name_plural = "Mission & Vision"

    def __str__(self):
        return "Mission & Vision Statements"

    # Optional: Ensure only one instance can exist
    def save(self, *args, **kwargs):
        if self._state.adding and MissionVision.objects.exists():
            raise ValueError("There can only be one MissionVision instance.")
        return super().save(*args, **kwargs)

class OfficialMessage(models.Model):
    """
    Model to store messages from Dean, Director, etc., for the homepage.
    """
    OFFICIAL_ROLES = [
        ('Dean ACR', 'Dean ACR'),
        ('Director', 'Director'),
        ('Chairman', 'Chairman'),
        # Add other roles as needed
    ]

    name = models.CharField(max_length=255)
    role = models.CharField(max_length=50, choices=OFFICIAL_ROLES, unique=True) # Ensure only one message per role
    profile_picture = models.ImageField(upload_to='official_pics/')
    message_title = models.CharField(max_length=255, blank=True, null=True)
    message_content = models.TextField()
    order = models.IntegerField(default=0, help_text="Order in which messages appear (lower number first)")
    last_updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Official Message"
        verbose_name_plural = "Official Messages"
        ordering = ['order', 'role'] # Order by custom order then role alphabetically

    def __str__(self):
        return f"Message from {self.role} - {self.name}"