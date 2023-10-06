# Generated by Django 4.2.6 on 2023-10-06 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Actor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Films',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('image', models.CharField(max_length=255)),
                ('director', models.CharField(max_length=255)),
                ('duration', models.PositiveIntegerField()),
                ('score', models.DecimalField(decimal_places=2, max_digits=4)),
                ('rating', models.CharField(max_length=10)),
                ('overview', models.TextField()),
                ('year', models.PositiveIntegerField()),
                ('actors', models.ManyToManyField(to='films.actor')),
                ('genres', models.ManyToManyField(to='films.genre')),
            ],
        ),
    ]
