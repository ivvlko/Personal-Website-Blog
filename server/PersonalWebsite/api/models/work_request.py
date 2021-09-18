from django.db import models
from phone_field import PhoneField


class WorkRequest(models.Model):
    type_of_work_choices = (
        ("Website", "Website"),
        ("Machine Learning Model", "Machine Learning Model"),
        ("Mobile App", "Mobile App"),
        ("Analytical Dashboard", "Analytical Dashboard"),
        ("Data Analysis/Analytics", "Data Analysis/Analytics"),
        
    )
    type_of_work = models.CharField(max_length=30, choices=type_of_work_choices)
    short_description = models.CharField(max_length=10000)
    expected_to_be_done_until = models.DateField()
    budget = models.IntegerField()
    image_layout = models.ImageField(blank=True, upload_to='request_layout_picture')
    email = models.EmailField()
    phone_number = PhoneField(blank=True, help_text='Contact phone number')
    answered = models.BooleanField(blank=True, default=False)

