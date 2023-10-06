from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination
from .models import Films
from .serializers import FilmSerializer
from .filters import FilmFilter


class FilmsList(generics.ListCreateAPIView):
    queryset = Films.objects.all().order_by('id')
    serializer_class = FilmSerializer
    pagination_class = PageNumberPagination
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilmFilter
    

class FilmsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Films.objects.all()
    serializer_class = FilmSerializer
