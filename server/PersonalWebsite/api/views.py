from api.models import *
from api.serializers import *
from rest_framework.generics import RetrieveUpdateDestroyAPIView,ListCreateAPIView
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from rest_framework.permissions import IsAdminUser, SAFE_METHODS

class IsAdminUserOrReadOnly(IsAdminUser):
    """
    Custom Permission Class - anyone can get but only admin can make post, put and patch;
    """
    def has_permission(self, request, view):
        is_admin = super(
            IsAdminUserOrReadOnly, 
            self).has_permission(request, view)
        return request.method in SAFE_METHODS or is_admin


class SummaryViewDetails(RetrieveUpdateDestroyAPIView):
    queryset = SummarySection.objects.all()
    serializer_class = SummarySerializer
    permission_classes = [IsAdminUserOrReadOnly]

class SummaryView(ListCreateAPIView):
    queryset = SummarySection.objects.all()
    serializer_class = SummarySerializer
    permission_classes = [IsAdminUserOrReadOnly]

class WorkExperienceView(ListCreateAPIView):
    queryset = WorkExperience.objects.all()
    serializer_class = WorkExperienceSerializer
    permission_classes = [IsAdminUserOrReadOnly]

class WorkExperienceViewDetails(RetrieveUpdateDestroyAPIView):
    queryset = WorkExperience.objects.all()
    serializer_class = SummarySerializer
    permission_classes = [IsAdminUserOrReadOnly]

class EducationView(ListCreateAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [IsAdminUserOrReadOnly]

class EducationViewDetails(RetrieveUpdateDestroyAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [IsAdminUserOrReadOnly]

class SkillSetView(ListCreateAPIView):
    queryset = SkillSet.objects.all()
    serializer_class = SkillSetSerializer
    permission_classes = [IsAdminUserOrReadOnly]

class SkillSetViewDetails(ListCreateAPIView):
    queryset = SkillSet.objects.all()
    serializer_class = SkillSetSerializer
    permission_classes = [IsAdminUserOrReadOnly]

