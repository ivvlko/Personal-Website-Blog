from django.shortcuts import render
from api.models import *
from api.serializers import *
from rest_framework.generics import RetrieveUpdateDestroyAPIView,ListCreateAPIView


class SummaryView(ListCreateAPIView):
    queryset = SummarySection.objects.all()
    serializer_class = SummarySerializer

class WorkExperienceView(ListCreateAPIView):
    queryset = WorkExperience.objects.all()
    serializer_class = WorkExperienceSerializer

class EducationView(ListCreateAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class SkillSetView(ListCreateAPIView):
    queryset = SkillSet.objects.all()
    serializer_class = SkillSetSerializer
