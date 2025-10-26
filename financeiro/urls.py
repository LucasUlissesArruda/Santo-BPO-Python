# financeiro/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClienteViewSet, LancamentoViewSet  # 1. Importe o LancamentoViewSet

# O router cuida de registrar as URLs para o ViewSet (CRUD)
router = DefaultRouter()
router.register(r'clientes', ClienteViewSet, basename='cliente')
router.register(r'lancamentos', LancamentoViewSet, basename='lancamento')  # 2. Adicione esta linha

urlpatterns = [
    path('', include(router.urls)),
]