import requests
from django.core.management.base import BaseCommand
from films.models import Films, Genre, Actor



class Command(BaseCommand):
    help = 'Seed data for Films, Genre, and Actor models'

    def seed_data(self, data, keyword):
        genre_names = [genre.strip() for genre in data['Genre'].split(',')]
        genres = [Genre.objects.get_or_create(name=name)[0] for name in genre_names]


        actor_names = [actor.strip() for actor in data['Actors'].split(',')]
        actors = [Actor.objects.get_or_create(name=name)[0] for name in actor_names]


        film = Films.objects.create(
            title=data['Title'],
            image=data['Poster'],
            director=data['Director'],
            duration=int(data['Runtime'].split()[0]),  # Extract duration in minutes
            score=float(data['imdbRating']),
            rating=data['Rated'],
            overview=data['Plot'],
            year=int(data['Year'])
        )

        film.genres.set(genres)
        film.actors.set(actors)

        self.stdout.write(self.style.SUCCESS(f'Successfully seeded data with keyword {keyword}'))


    def handle(self, *args, **options):
        # Define the OMDB API URL with your API key
        api_url = 'https://www.omdbapi.com/?t={}&apikey=d3f70c50'
        keywords = ['star', 'Shadow', 'super', 'Iron']
        try:
            for keyword in keywords:
                response = requests.get(api_url.format(keyword))
                data = response.json()
                self.seed_data(data, keyword)

        except requests.exceptions.RequestException as e:
            self.stderr.write(self.style.ERROR(f'Error fetching data from OMDB API: {e}'))
