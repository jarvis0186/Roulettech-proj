from django.urls import path
from .views import api_home, api_data

urlpatterns = [
    path('home/', api_home),
    path('data/', api_data),
]