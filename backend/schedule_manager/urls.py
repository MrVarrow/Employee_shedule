from .views import  ScheduleManagerViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path, include

router = DefaultRouter()
router.register('schedule-manager', ScheduleManagerViewSet, basename='schedule-manager')
urlpatterns = [
    path('', include(router.urls), name='schedule-manager'),
]