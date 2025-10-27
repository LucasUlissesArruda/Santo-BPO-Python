
# backend/apps/clientes/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClienteViewSet

router = DefaultRouter()
router.register(r'', ClienteViewSet, basename='cliente') # Regista o CRUD na raiz do app

urlpatterns = [
    path('', include(router.urls)),
]