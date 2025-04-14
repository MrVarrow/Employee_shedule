from .views import EmployeeManagerViewSet
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('employee', EmployeeManagerViewSet, basename='employee')

urlpatterns = [
    path('', include(router.urls), name='employee_preferences'),
]
