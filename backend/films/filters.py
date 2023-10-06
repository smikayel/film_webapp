import django_filters
from .models import Films

class FilmFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Films
        fields = ['title']
