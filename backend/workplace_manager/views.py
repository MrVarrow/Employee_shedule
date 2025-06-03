from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import  Teams
from .serializers import TeamsSerializer

# Create your views here.

class TeamsViewSet(viewsets.ModelViewSet):
    queryset = Teams.objects.all()
    serializer_class = TeamsSerializer
    permission_classes = [AllowAny] # change later to isAuthenticated
