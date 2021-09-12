from api.models import *
from rest_framework import serializers

class SummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = SummarySection
        fields = '__all__'

class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class SkillSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillSet
        fields = '__all__'
