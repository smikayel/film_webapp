from rest_framework import serializers
from .models import Films

class FilmSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Films
        fields = '__all__'
