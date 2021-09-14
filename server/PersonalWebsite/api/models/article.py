from django.db import models
from django.utils import timezone

class Article(models.Model):
    title = models.CharField(max_length=100)
    text = models.CharField(max_length=10000)
    image_url = models.URLField(blank=True, null=True)
    date_created = models.DateTimeField(default=timezone.now, blank=True, null=True)

