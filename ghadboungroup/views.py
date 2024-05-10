from django.shortcuts import render
from django.http import JsonResponse
from .models import Item
from pathlib import Path
import random

# views
def index(request, path):
    return render(request, 'ghadboungroup/index.html')

''' Get Images API route '''
# Chack category 
def filter_categories(items, category, filtered_items):
    print('function ran')
    # Filtering categories
    if (category == 'all'):
        pass
    else:
        for item in items:
            if item.category == category:
                filtered_items.append(item)
    
    # Retrurn filtered items
    return filtered_items
    
def get_images(request, limit, category, order):
    # Filtering Queried items
    if category == 'all':
        if limit == 0:
            if order =='newest':
                items = Item.objects.all().order_by('created_date')
            elif order == 'oldest':
                items = Item.objects.all().order_by('-created_date')
            elif order == 'random':
                items = random.sample(list(Item.objects.all()))
        else:
            if order =='newest':
                items = Item.objects.all().order_by('created_date')[:limit]
            elif order == 'oldest':
                items = Item.objects.all().order_by('-created_date')[:limit]
            elif order == 'random':
                items = random.sample(list(Item.objects.all()), limit)
    else:
        if limit == 0:
            if order =='newest':
                items = Item.objects.filter(category=category).order_by('created_date')
            elif order == 'oldest':
                items = Item.objects.filter(category=category).order_by('-created_date')
            elif order == 'random':
                items = random.sample(list(Item.objects.filter(category=category)))
        else:
            if order =='newest':
                items = Item.objects.filter(category=category).order_by('created_date')[:limit]
            elif order == 'oldest':
                items = Item.objects.filter(category=category).order_by('-created_date')[:limit]
            elif order == 'random':
                items = random.sample(list(Item.objects.filter(category=category)), limit)
        
    # Return json response
    return JsonResponse([item.serialize() for item in items], safe=False)


''' Get image by id '''
def get_image(request, id):
    item = Item.objects.get(pk=id)

    return JsonResponse(item.serialize(), safe=False)