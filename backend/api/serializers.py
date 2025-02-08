from rest_framework import serializers
from .models import *

class CreateUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, style={'input_type': 'password'})

    class Meta:
        model = CreateUser
        fields = ('full_name', 'username', 'password', 'email', 'birthday')
        extra_kwargs = {'password': {'write_only': True}}