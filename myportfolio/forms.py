from django import forms
from .models import Intro

class IntroForm(forms.ModelForm):
    class Meta:
        model = Intro
        fields = [
            'full_name',
            'tagline',
            'about_me',
            'location',
            'profile_picture',
            'resume',
            'email',
            'phone',
            'linkedin',
            'github',
            'twitter',
            'website'
        ]
        widgets = {
            'about_me': forms.Textarea(attrs={'rows': 4}),
            'profile_picture': forms.FileInput(attrs={'accept': 'image/*'}),
            'resume': forms.FileInput(attrs={'accept': '.pdf,.doc,.docx'})
        }