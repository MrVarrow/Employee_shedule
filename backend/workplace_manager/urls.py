from .views import  TeamsViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path, include

router = DefaultRouter()
router.register('teams', TeamsViewSet, basename='teams')
urlpatterns = [
    path('', include(router.urls), name='teams_preferences'),
]