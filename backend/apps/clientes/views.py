# backend/apps/clientes/views.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated # Garante que está protegido
from .models import Cliente
from .serializers import ClienteSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite aos clientes serem vistos ou editados.
    """
    queryset = Cliente.objects.all().order_by('razao_social') # Pega todos os clientes ordenados
    serializer_class = ClienteSerializer
    permission_classes = [IsAuthenticated] # Exige login