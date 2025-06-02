from django.db import models

# Create your models here.

class ScheduleManager(models.Model):
    schedule_month_year = models.DateField()
    team_name = models.CharField(max_length=100)
    working_free_days = models.JSONField()
    working_hours = models.JSONField()
    team_members_by_time_of_day = models.JSONField()