from django.urls import path
from . import views

app_name = 'myportfolio'

urlpatterns = [
    path('', views.home_view, name='home'),
    path('register/', views.register_user, name='register'),
    path('login/', views.login_view, name='login'),  # Changed from login to login_view
    path('company/', views.company_login, name='company_login'),
    path('profile/', views.user_profile, name='user_profile'),
    path('portfolio/<int:developer_id>/', views.portfolio_detail, name='portfolio_detail'),
    # path('intro/', views.intro_view, name='intro'),
    path('intro/', views.intro, name='intro'),  # Changed from intro_view to intro
    path('company_register/', views.company_register, name='company_register'),
    path('pricing/', views.pricing_view, name='pricing'),
    path('developers/', views.developers_view, name='developers'),
    path('companies/', views.companies_view, name='companies'),
    path('company/post/', views.company_post, name='company_post'),
    path('company/profile/', views.company_profile, name='company_profile'),  # Add this line
    path('company/project/<str:project_id>/delete/', views.delete_project, name='delete_project'),
]