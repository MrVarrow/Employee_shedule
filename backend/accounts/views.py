from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import CreateUser
from .serializers import CreateUserSerializer, LoginUserSerializer


class CreateUserViewSet(viewsets.ModelViewSet):
    queryset = CreateUser.objects.all()
    serializer_class = CreateUserSerializer

class LoginUserViewSet(viewsets.ViewSet):
    @action(detail=False, methods=['post'])
    def login(self, request):
        """Authenticate user using username and password"""
        serializer = LoginUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            return Response({"message": "Login successful!", "username": user.username}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


