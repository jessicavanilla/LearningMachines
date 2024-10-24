# myproject/urls.py
from django.contrib import admin
from django.urls import path
from users.views import simple_view, UserSignupView, UserLoginView, UserProfileView  

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/test/', simple_view, name='simple_view'),  # Test endpoint
    path('api/users/signup/', UserSignupView.as_view(), name='user_signup'),
    path('api/users/login/', UserLoginView.as_view(), name='user_login'),
    path('api/users/profile/', UserProfileView.as_view(), name='user_profile'),
]
