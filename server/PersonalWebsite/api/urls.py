from django.urls import path, include
from api.views import *

urlpatterns = [
    path('api/static/summary/', SummaryView.as_view()),
    path('api/static/work-experience/', WorkExperienceView.as_view()),
    path('api/static/education/', EducationView.as_view()),
    path('api/static/skillset/', SkillSetView.as_view()),
]
