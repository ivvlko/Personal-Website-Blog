from django.db import models

class SummarySection(models.Model):
    picture = models.ImageField(upload_to='profile_pictures')
    paragraph_with_short_bio = models.TextField(max_length=5000)


class WorkExperience(models.Model):
    role = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    dates = models.CharField(max_length=200)
    short_description = models.TextField(max_length=5000)


class Education(models.Model):
    degree = models.CharField(max_length=200)
    school = models.CharField(max_length=200)
    dates = models.CharField(max_length=200)
    short_description = models.TextField(max_length=5000)


class Project(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='project_pictures')
    technologies = models.TextField(max_length=500)
    source_code = models.CharField(max_length=1000)
    url = models.CharField(max_length=100, blank=True)
