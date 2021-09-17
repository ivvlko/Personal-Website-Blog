from django.db import models
from django.utils import timezone
from api.models.article import Article

# Available for Anonymous users
class Comment(models.Model):
    author = models.CharField(max_length=50) 
    text = models.TextField(max_length=1000)
    date_created = models.DateTimeField(default=timezone.now)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)