from django.contrib import admin
from .models import Register, Intro, Company


@admin.register(Register)
class RegisterAdmin(admin.ModelAdmin):
    list_display = ('name', 'email')
    search_fields = ('name', 'email')
    list_filter = ('name',)

@admin.register(Intro)
class IntroAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'user', 'email', 'location')
    search_fields = ('full_name', 'email', 'location')
    list_filter = ('location',)

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'company_email', 'industry', 'company_size', 'created_at')
    list_filter = ('industry', 'company_size', 'created_at')
    search_fields = ('company_name', 'company_email', 'industry')
    readonly_fields = ('created_at',)
    fieldsets = (
        ('Company Information', {
            'fields': ('company_name', 'company_email', 'industry', 'company_size')
        }),
        ('Security', {
            'fields': ('password',),
            'classes': ('collapse',)
        }),
        ('Metadata', {
            'fields': ('created_at',)
        })
    )
    ordering = ('-created_at',)
