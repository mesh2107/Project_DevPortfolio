from django.db import models
from django.conf import settings
from django.core.validators import FileExtensionValidator


class Register(models.Model):  # Changed to PascalCase
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return f"Name: {self.name}, Email: {self.email}"

class Intro(models.Model):
    user = models.OneToOneField(
        'Register',
        on_delete=models.CASCADE,
        related_name='intro',
        null=False  # Changed from True to False
    )
    # Personal Information
    full_name = models.CharField(max_length=100)
    tagline = models.CharField(max_length=200, blank=True)
    about_me = models.TextField(blank=True)
    location = models.CharField(max_length=100, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    resume = models.FileField(
        upload_to='resumes/',
        null=True,
        blank=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=['pdf', 'doc', 'docx'],
                message="Please upload a valid document file (PDF, DOC, or DOCX)."
            )
        ]
    )
    
    # Contact Information
    email = models.EmailField(max_length=100, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    
    # Social Links
    linkedin = models.URLField(blank=True)
    github = models.URLField(blank=True)
    twitter = models.URLField(blank=True)
    website = models.URLField(blank=True)

    def __str__(self):
        return f"{self.full_name}'s Portfolio"

    class Meta:
        verbose_name = "Portfolio Introduction"
        verbose_name_plural = "Portfolio Introductions"

    def save(self, *args, **kwargs):
        if not self.user:
            # Get the first user as default
            from .models import Register
            default_user = Register.objects.first()
            if default_user:
                self.user = default_user
        super().save(*args, **kwargs)

class Company(models.Model):
    company_name = models.CharField(max_length=100)
    company_email = models.EmailField(unique=True)
    industry = models.CharField(max_length=50)
    company_size = models.CharField(max_length=20)
    password = models.CharField(max_length=128)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        print(f"Saving company: {self.company_name}")
        super().save(*args, **kwargs)
        print(f"Company saved successfully: {self.company_name}")
    
    def __str__(self):
        return f"{self.company_name} ({self.industry})"