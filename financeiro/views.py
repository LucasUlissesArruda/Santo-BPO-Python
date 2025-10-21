# financeiro/views.py

from rest_framework import viewsets
from .models import Cliente, Lancamento
# Esta linha vai funcionar agora que o serializers.py está salvo
from .serializers import ClienteSerializer, LancamentoSerializer 
from rest_framework.permissions import IsAuthenticated

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = [IsAuthenticated]

class LancamentoViewSet(viewsets.ModelViewSet):
    queryset = Lancamento.objects.all()
    serializer_class = LancamentoSerializer
    permission_classes = [IsAuthenticated]