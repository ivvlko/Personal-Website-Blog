# Generated by Django 3.2.7 on 2021-09-12 06:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Education',
        ),
        migrations.DeleteModel(
            name='SkillSet',
        ),
        migrations.DeleteModel(
            name='SummarySection',
        ),
        migrations.DeleteModel(
            name='WorkExperience',
        ),
    ]
