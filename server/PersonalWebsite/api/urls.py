from django.urls import path, include
from api.views import *

urlpatterns = [
    path('api/session/', session_view, name='session'),
    path('api/csrf/', get_csrf, name='csrf'),
    path('api/static/summary/', SummaryView.as_view()),
    path('api/static/summary/<int:pk>', SummaryViewDetails.as_view()),
    path('api/static/work-experience/', WorkExperienceView.as_view()),
    path('api/static/work-experience/<int:pk>', WorkExperienceViewDetails.as_view()),
    path('api/static/education/', EducationView.as_view()),
    path('api/static/education/<int:pk>', EducationViewDetails.as_view()),
    path('api/static/projects/', ProjectView.as_view()),
    path('api/static/projects/<int:pk>', ProjectViewDetails.as_view()),
    path('api/articles/', ArticleView.as_view()),
    path('api/articles/<int:pk>', ArticleViewDetails.as_view()),
    path('api/comments/', CommentView.as_view()),
    path('api/comments/<int:pk>', CommentViewDetails.as_view()),
    path('api/work-request/', CreateWorkRequestView.as_view()),
    path('api/work-requests-list/', GetWorkRequestListsView.as_view()),
    path('api/work-requests/<int:pk>', GetWorkRequestViewDetails.as_view()),

]
