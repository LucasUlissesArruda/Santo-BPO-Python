# backend/apps/clientes/serializers.py
from rest_framework import serializers
from .models import Cliente

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__' # Expõe todos os campos
