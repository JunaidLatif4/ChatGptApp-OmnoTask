from django.contrib import admin
from django.urls import path , include

# Views :
from .views import homePageView , chatRequest





urlpatterns = [
    path('admin/', admin.site.urls),
    path("" , homePageView),
    path("api/chat/" , chatRequest.as_view()),
]
