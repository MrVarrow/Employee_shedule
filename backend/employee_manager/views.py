from rest_framework import viewsets, permissions
from rest_framework.permissions import AllowAny
from .models import Employee
from .serializers import EmployeeSerializer

# Create your views here.


class EmployeeManagerViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [AllowAny] # change later to isAuthenticated

