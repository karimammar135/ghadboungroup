from django.shortcuts import render
from django.http import JsonResponse
from .models import Item
from pathlib import Path

# views
def index(request, path):
    return render(request, 'ghadboungroup/index.html')

# Get Images API route
def get_images(request):
    items = Item.objects.all()

    for item in items:
        print(item.serialize())

    return JsonResponse([item.serialize() for item in items], safe=False)