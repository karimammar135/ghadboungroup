from django.contrib import admin
from .models import User, Item

# Register models
admin.site.register(User)
admin.site.register(Item)