from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'create-user', CreateUserViewSet, basename='create_user')
urlpatterns = router.urls


