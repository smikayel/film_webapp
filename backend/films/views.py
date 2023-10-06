from rest_framework import generics
from .models import Films
from .serializers import FilmSerializer

class FilmsList(generics.ListCreateAPIView):
    queryset = Films.objects.all()
    serializer_class = FilmSerializer

class FilmsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Films.objects.all()
    serializer_class = FilmSerializer
