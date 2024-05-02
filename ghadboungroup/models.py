from django.db import models
from django.contrib.auth.models import AbstractUser

# User model
class User(AbstractUser):
    pass

# Item Model
class Item(models.Model):
    CATEGORIES = [
        ('KITCHEN', 'Kitchen'),
        ('LIVINGROOM', 'Living room'),
        ('BATHROOM', 'Bath room'),
    ]
    image = models.ImageField(upload_to='ghadboungroup/static/images', blank=True)
    description = models.TextField()
    category = models.CharField(choices=CATEGORIES, default='KITCHEN')

    def __str__(self):
        return f"image:{self.image} description:{self.description} category: {self.category}"
    
    def serialize(self):
        return {
            "id": self.id,
            "image_url": f"../../static/images/{(self.image.url)[29:]}",
            "description": self.description,
            "category": self.category
        }