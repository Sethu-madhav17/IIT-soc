from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, AlumniProfile
from django.utils.translation import gettext_lazy as _

# Define an inline admin descriptor for AlumniProfile model
class AlumniProfileInline(admin.StackedInline):
    model = AlumniProfile
    can_delete = False
    verbose_name_plural = 'alumni profile'

# Define a new User admin
class UserAdmin(BaseUserAdmin):
    inlines = (AlumniProfileInline,)
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'is_active', 'get_is_verified') # Added get_is_verified
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups', 'alumni_profile__is_verified')
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'email')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                       'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )

    def get_is_verified(self, obj):
        return obj.alumni_profile.is_verified if hasattr(obj, 'alumni_profile') else False
    get_is_verified.boolean = True
    get_is_verified.short_description = 'Is Verified'


# Re-register UserAdmin
admin.site.register(User, UserAdmin)
# AlumniProfile is managed through the UserAdmin inline, so no need to register it separately