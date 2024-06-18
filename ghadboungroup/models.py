from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

# User model
class User(AbstractUser):
    pass

# Item Model
class Item(models.Model):
    CATEGORIES = [
        ('KITCHEN', 'Kitchen'),
        ('LIVINGROOM', 'Living room'),
        ('BATHROOM', 'Bath room'),
        ('BEDROOM', 'Bed room'),
        ('EXTERIOR', 'Exterior'),
    ]
    image = models.ImageField(upload_to='ghadboungroup/static/images', blank=True)
    description = models.TextField(blank=True)
    category = models.CharField(choices=CATEGORIES, default='KITCHEN')
    created_at = models.DateTimeField('date created', default=timezone.now)

    def __str__(self):
        return f"image:{self.image} description:{self.description} category: {self.category}"
    
    def serialize(self):
        return {
            "id": self.id,
            "image_url": f"../../static/images/{(self.image.url)[29:]}",
            "description": self.description,
            "category": self.category,
            "created_at": self.created_at
        }