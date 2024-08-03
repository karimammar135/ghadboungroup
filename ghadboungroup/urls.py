from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index, {'path': ''}, name="index"),
    path('sitemap.xml/', views.sitemap, name='sitemap'),
    re_path(r'^(?!sitemap\.xml$)(?P<path>.*)/$', views.index, name="index"),

    # API Routes
    path('get_images/<int:limit>/<str:category>/<str:order>', views.get_images, name='get_images'),
    path('get_image/<int:id>', views.get_image, name='get_image'),
    path('gallery_pagination', views.gallery_pagination, name="gallery_pagination"),
]
