from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [ 
    path('admin/', admin.site.urls),
    path('api/', include('rest_framework.urls')),
    path('', include('api.urls')),
    url(r'^auth/', include('rest_auth.urls')),
    url(r'^auth/registration/', include('rest_auth.registration.urls'))

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
