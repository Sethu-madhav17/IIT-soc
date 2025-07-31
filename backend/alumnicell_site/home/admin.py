from django.contrib import admin
from .models import MissionVision, OfficialMessage

@admin.register(MissionVision)
class MissionVisionAdmin(admin.ModelAdmin):
    list_display = ('id', 'last_updated')
    # Prevent adding multiple instances from admin (though we have save() method for this too)
    def has_add_permission(self, request):
        return not MissionVision.objects.exists()

@admin.register(OfficialMessage)
class OfficialMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'order', 'last_updated')
    list_editable = ('order',)
    list_filter = ('role',)
    search_fields = ('name', 'message_content')