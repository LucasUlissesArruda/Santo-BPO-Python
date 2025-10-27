
# backend/apps/clientes/models.py
from django.db import models

class Cliente(models.Model):
    razao_social = models.CharField(max_length=255, verbose_name="Razão Social")
    cnpj = models.CharField(max_length=18, unique=True, verbose_name="CNPJ") # unique=True garante CNPJ único
    responsavel_nome = models.CharField(max_length=100, verbose_name="Nome do Responsável")
    responsavel_email = models.EmailField(max_length=100, verbose_name="Email do Responsável")
    responsavel_telefone = models.CharField(max_length=20, blank=True, null=True, verbose_name="Telefone")
    
    criado_em = models.DateTimeField(auto_now_add=True)
    atualizado_em = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.razao_social

    class Meta:
        verbose_name = "Cliente"
        verbose_name_plural = "Clientes"
        ordering = ['razao_social'] # Ordena por nome por padrão