from rest_framework import routers
from .views import CreateUserViewSet, LoginUserViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'register', CreateUserViewSet, basename='register')

urlpatterns = [
    path('accounts/', include(router.urls)),
    path('accounts/login/', LoginUserViewSet.as_view({'post': 'login'}), name='login'),
]


