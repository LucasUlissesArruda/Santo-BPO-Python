# financeiro/views.py

from rest_framework import viewsets
from .models import Cliente, Lancamento
from .serializers import ClienteSerializer, LancamentoSerializer 
from rest_framework.permissions import IsAuthenticated
from django.db.models import Sum, Count, Q
from rest_framework.views import APIView
from rest_framework.response import Response
import datetime


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = [IsAuthenticated]

class LancamentoViewSet(viewsets.ModelViewSet):
    queryset = Lancamento.objects.all()
    serializer_class = LancamentoSerializer
    permission_classes = [IsAuthenticated]

class DashboardAPIView(APIView):
    """
    View para fornecer dados agregados para o dashboard.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        total_clientes = Cliente.objects.count()
        lancamentos_pendentes = Lancamento.objects.filter(status='PENDENTE')
        
        total_a_receber = lancamentos_pendentes.filter(tipo='RECEBER').aggregate(
            total=Sum('valor')
        )['total'] or 0.00 

        total_a_pagar = lancamentos_pendentes.filter(tipo='PAGAR').aggregate(
            total=Sum('valor')
        )['total'] or 0.00

        hoje = datetime.date.today()
        total_pago_mes = Lancamento.objects.filter(
            status='PAGO',
            tipo='PAGAR',
            data_pagamento__year=hoje.year,
            data_pagamento__month=hoje.month
        ).aggregate(total=Sum('valor'))['total'] or 0.00
        
        total_recebido_mes = Lancamento.objects.filter(
            status='PAGO',
            tipo='RECEBER',
            data_pagamento__year=hoje.year,
            data_pagamento__month=hoje.month
        ).aggregate(total=Sum('valor'))['total'] or 0.00

        data = {
            'total_clientes': total_clientes,
            'total_a_receber_pendente': total_a_receber,
            'total_a_pagar_pendente': total_a_pagar,
            'total_pago_mes_atual': total_pago_mes,
            'total_recebido_mes_atual': total_recebido_mes,
            'contagem_pendentes': lancamentos_pendentes.count()
        }
        
        return Response(data)