from django.db import models

class Films(models.Model):
    title = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    director = models.CharField(max_length=255)
    genres = models.ManyToManyField('Genre')
    duration = models.PositiveIntegerField()
    score = models.DecimalField(max_digits=4, decimal_places=2)
    rating = models.CharField(max_length=10)
    overview = models.TextField()
    year = models.PositiveIntegerField()
    actors = models.ManyToManyField('Actor')

    def __str__(self):
        return self.title

class Genre(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Actor(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
