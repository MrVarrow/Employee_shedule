from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class Teams(models.Model):
    team_name = models.CharField(max_length=100)
    team_members = ArrayField(models.CharField(max_length=100))
    team_working_hours = models.CharField(max_length=100)
    max_shift_hours = models.IntegerField()
    min_shift_hours = models.IntegerField()
    min_monthly_hours = models.IntegerField()
    max_monthly_hours = models.IntegerField()
    min_number_of_employees_morning = models.IntegerField()
    max_number_of_employees_morning = models.IntegerField()
    min_number_of_employees_evening = models.IntegerField()
    max_number_of_employees_evening = models.IntegerField()
    min_number_of_employees_night = models.IntegerField()
    max_number_of_employees_night = models.IntegerField()

