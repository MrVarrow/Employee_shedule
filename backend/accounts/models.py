from django.db import models

# Create your models here.
class CreateUser(models.Model):
    full_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=255)
    email = models.CharField(unique=True, max_length=100)
    birthday = models.DateField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username