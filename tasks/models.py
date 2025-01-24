from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    due_date = models.DateField()
    status = models.BooleanField(default=False)  # False = Incomplete, True = Complete

    def __str__(self):
        return self.title