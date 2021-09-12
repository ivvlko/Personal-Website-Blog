# Generated by Django 3.2.7 on 2021-09-12 06:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('api', '0002_auto_20210912_0919'),
    ]

    operations = [
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('degree', models.CharField(max_length=200)),
                ('school', models.CharField(max_length=200)),
                ('dates', models.CharField(max_length=200)),
                ('short_description', models.CharField(max_length=5000)),
            ],
        ),
        migrations.CreateModel(
            name='SkillSet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('overall_skill', models.CharField(max_length=200)),
                ('technologies', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='SummarySection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('picture', models.ImageField(upload_to='')),
                ('paragraph_with_short_bio', models.CharField(max_length=5000)),
            ],
        ),
        migrations.CreateModel(
            name='WorkExperience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.CharField(max_length=200)),
                ('company', models.CharField(max_length=200)),
                ('dates', models.CharField(max_length=200)),
                ('short_description', models.CharField(max_length=5000)),
            ],
        ),
    ]
