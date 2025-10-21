# bpo_config/urls.py

from django.contrib import admin
from django.urls import path, include  # Adicione o 'include' aqui

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Esta linha direciona tudo que começa com 'api/' 
    # para o arquivo urls.py do app 'financeiro'
    path('api/', include('financeiro.urls')), 
]