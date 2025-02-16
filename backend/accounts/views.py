from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CreateUser
from .serializers import CreateUserSerializer, LoginUserSerializer
from rest_framework.permissions import AllowAny


class CreateUserViewSet(viewsets.ModelViewSet):
    queryset = CreateUser.objects.all()
    serializer_class = CreateUserSerializer
    permission_classes = [AllowAny]

class LoginUserViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]

    @action(detail=False, methods=['post'])
    def login(self, request):
        """Authenticate user using username and password"""
        serializer = LoginUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']

            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            return Response({
                "message": "Login successful!",
                "username": user.username,
                "access_token": access_token,  # Access Token for authentication
                "refresh_token": str(refresh),  # Refresh Token for getting new access tokens
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


