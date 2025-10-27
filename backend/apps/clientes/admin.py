
# backend/apps/clientes/admin.py
from django.contrib import admin
from .models import Cliente

@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ('razao_social', 'cnpj', 'responsavel_nome', 'responsavel_email', 'criado_em')
    search_fields = ('razao_social', 'cnpj', 'responsavel_nome')
    list_filter = ('criado_em',)
    ordering = ('razao_social',)