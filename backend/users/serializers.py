# users/serializers.py
from rest_framework import serializers
from .models import User
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.Serializer):  
    email = serializers.EmailField()
    password = serializers.CharField()

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])  # Hash the password
        user = User(**validated_data)  # Create User instance
        user.save()  # Save to MongoDB
        return user