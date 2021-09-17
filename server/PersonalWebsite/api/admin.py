from django.contrib import admin
from api.models.static_models import *
from api.models.article import Article
from api.models.comment import Comment
from api.models.work_request import WorkRequest


admin.site.register(SummarySection)
admin.site.register(WorkExperience)
admin.site.register(Education)
admin.site.register(Project)
admin.site.register(Article)
admin.site.register(Comment)
admin.site.register(WorkRequest)