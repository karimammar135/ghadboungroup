from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

# User model
class User(AbstractUser):
    pass


# Image model
class Image(models.Model):
    CATEGORIES = [
        ('KITCHEN', 'Kitchen'),
        ('LIVINGROOM', 'Living room'),
        ('DOOR', 'door'),
        ('BATHROOM', 'Bath room'),
        ('BEDROOM', 'Bed room'),
        ('EXTERIOR', 'Exterior'),
        ('OTHER', 'Other'),
    ]
    image_url = models.URLField()
    description = models.TextField(blank=True)
    category = models.CharField(choices=CATEGORIES, default='KITCHEN')
    created_at = models.DateTimeField('date created', default=timezone.now)

    def __str__(self):
        return f"image_url:{self.image_url} description:{self.description} category: {self.category}"
    
    def serialize(self):
        return {
            "id": self.id,
            "image_url": self.image_url,
            "description": self.description,
            "category": self.category,
            "created_at": self.created_at
        }