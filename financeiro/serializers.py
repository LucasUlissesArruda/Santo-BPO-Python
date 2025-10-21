# financeiro/serializers.py

from rest_framework import serializers
from .models import Cliente, Lancamento  # Verifique se 'Lancamento' está importado aqui

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

# Esta classe provavelmente estava faltando ou não foi salva
class LancamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lancamento
        fields = '__all__'