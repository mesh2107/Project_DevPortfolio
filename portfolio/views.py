from django.shortcuts import render

def login(request):
    return render(request, "login.html")
# Create your views here.

def register(request):
    return render(request, "register.html")

def intro(request):
    return render(request, "intro.html")