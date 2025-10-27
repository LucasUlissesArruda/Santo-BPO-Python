# backend/apps/relatorios/urls.py
from django.urls import path
from .views import DashboardAPIView
# Importa aqui as outras views se existirem (Excel, PDF)

urlpatterns = [
    path('dashboard/', DashboardAPIView.as_view(), name='dashboard'),
    # Adiciona aqui os paths para as outras views de relatórios
    # ex: path('exportar-excel/', ExportarExcelView.as_view(), name='exportar_excel'),
]
