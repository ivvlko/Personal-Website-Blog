from django.db import models

class SummarySection(models.Model):
    paragraph_with_short_bio = models.CharField(max_length=5000)


class WorkExperience(models.Model):
    role = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    dates = models.CharField(max_length=200)
    short_description = models.CharField(max_length=5000)


class Education(models.Model):
    degree = models.CharField(max_length=200)
    school = models.CharField(max_length=200)
    dates = models.CharField(max_length=200)
    short_description = models.CharField(max_length=5000)


class SkillSet(models.Model):
    overall_skill = models.CharField(max_length=200)
    technologies = models.CharField(max_length=1000)
