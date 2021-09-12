from django.urls import path, include
from api.views import *

urlpatterns = [
    path('api/static/summary/', SummaryView.as_view()),
    path('api/static/summary/<int:pk>', SummaryViewDetails.as_view()),
    path('api/static/work-experience/', WorkExperienceView.as_view()),
    path('api/static/work-experience/<int:pk>', WorkExperienceViewDetails.as_view()),
    path('api/static/education/', EducationView.as_view()),
    path('api/static/education/<int:pk>', EducationViewDetails.as_view()),
    path('api/static/skillset/', SkillSetView.as_view()),
    path('api/static/skillset/<int:pk>', SkillSetViewDetails.as_view()),
]
