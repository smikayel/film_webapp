from django.urls import path
from . import views

urlpatterns = [
    path('', views.FilmsList.as_view(), name='films-list'),
    path('<int:pk>/', views.FilmsDetail.as_view(), name='films-detail'),
]
