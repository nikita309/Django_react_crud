from django.db import models

from Django_crud.settings import TIME_ZONE

# Create your models here.
class Student(models.Model):
    name = models.CharField("Reference Id", max_length=240)
    email = models.EmailField()
    document = models.CharField("Subject", max_length=20)
    phone = models.TextField()
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name
