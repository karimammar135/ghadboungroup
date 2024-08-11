from django.contrib import admin
from .models import User, Image

# Register models
admin.site.register(User)
admin.site.register(Image)