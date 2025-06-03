from .models import ScheduleManager
from rest_framework import serializers

class ScheduleManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScheduleManager
        fields = '__all__'