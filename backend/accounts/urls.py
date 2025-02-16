from rest_framework import routers
from .views import CreateUserViewSet, LoginUserViewSet
from rest_framework_simplejwt import views as jwt_views
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'register', CreateUserViewSet, basename='register')

urlpatterns = [
    path('accounts/', include(router.urls)),
    path('accounts/login/', LoginUserViewSet.as_view({'post': 'login'}), name='login'),

    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Obtain JWT token pair
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]


