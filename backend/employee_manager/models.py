from django.db import models

# Create your models here.
class Employee(models.Model):
    name = models.CharField(max_length=100)
    hours_per_month = models.IntegerField()
    hours_per_day = models.IntegerField()
    free_days = models.DateField()
    shift_preference = models.CharField(max_length=100)
    special_shift_preferences = models.CharField(max_length=100)
    special_hours_preferences = models.CharField(max_length=100)
