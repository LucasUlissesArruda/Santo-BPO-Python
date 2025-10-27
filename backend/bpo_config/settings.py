# backend/bpo_config/settings.py

INSTALLED_APPS = [
    # Apps padrão do Django
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Apps de terceiros que adicionámos
    'rest_framework',
    'rest_framework_simplejwt',
    'corsheaders', # Para comunicação com o front-end

    # Nossos Apps (com caminho completo a partir de backend/)
    'backend.apps.clientes',
    'backend.apps.financeiro',
    'backend.apps.relatorios',
    # Adiciona 'backend.utils' se for um app Django configurado
]