from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Employee(models.Model):
    name = models.CharField(max_length=100)
    hours_per_month = models.IntegerField()
    hours_per_day = models.IntegerField()
    free_days = ArrayField(models.DateField(), blank=True, default=list)
    shift_preference = models.CharField(max_length=20)
    special_shift_preferences = ArrayField(models.CharField(max_length=50), blank=True, default=list)
    special_hours_preferences = ArrayField(models.CharField(max_length=50), blank=True, default=list)
