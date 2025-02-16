from django.contrib.auth.hashers import make_password, check_password
from .models import CreateUser
from rest_framework import serializers


class CreateUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CreateUser
        fields = ('full_name', 'username', 'password', 'email', 'birthday')

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])  # Hash password
        return super().create(validated_data)

class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')
        try:
            user = CreateUser.objects.get(username=username)
        except CreateUser.DoesNotExist:
            raise serializers.ValidationError('Invalid username or password')

        if not check_password(password, user.password):
            raise serializers.ValidationError('Invalid username or password')

        data['user'] = user
        return data




