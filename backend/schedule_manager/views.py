from .models import ScheduleManager
from .serializers import ScheduleManagerSerializer
from rest_framework.permissions import AllowAny
from rest_framework import viewsets

# Create your views here.
class ScheduleManagerViewSet(viewsets.ModelViewSet):
    queryset = ScheduleManager.objects.all()
    serializer_class = ScheduleManagerSerializer
    permission_classes = [AllowAny]
