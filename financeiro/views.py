# financeiro/views.py

from rest_framework import viewsets
from .models import Cliente
from .serializers import ClienteSerializer

# Este ViewSet cria todos os endpoints CRUD (Create, Read, Update, Delete)
# para o modelo Cliente automaticamente.
class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer