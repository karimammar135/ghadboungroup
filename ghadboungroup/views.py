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
    try:
        if category == 'all':
            if limit == 0:
                if order =='newest':
                    items = Item.objects.all().order_by('-created_at')
                elif order == 'oldest':
                    items = Item.objects.all().order_by('created_at')
                elif order == 'random':
                    items = random.sample(list(Item.objects.all()))
            else:
                if order =='newest':
                    items = Item.objects.all().order_by('-created_at')[:limit]
                elif order == 'oldest':
                    items = Item.objects.all().order_by('created_at')[:limit]
                elif order == 'random':
                    items = random.sample(list(Item.objects.all()), limit)
        else:
            if limit == 0:
                if order =='newest':
                    items = Item.objects.filter(category=category).order_by('-created_at')
                elif order == 'oldest':
                    items = Item.objects.filter(category=category).order_by('created_at')
                elif order == 'random':
                    items = random.sample(list(Item.objects.filter(category=category)))
            else:
                if order =='newest':
                    items = Item.objects.filter(category=category).order_by('-created_at')[:limit]
                elif order == 'oldest':
                    items = Item.objects.filter(category=category).order_by('created_at')[:limit]
                elif order == 'random':
                    items = random.sample(list(Item.objects.filter(category=category)), limit)
    except ValueError:
        return JsonResponse({"message": "no enough items"}, status=201)
        
    # Return json response
    return JsonResponse([item.serialize() for item in items], safe=False)


''' Pagination view '''
# Get fist and latest Items 
# Get first item
def get_first(category):
    if category == None:
        first = Item.objects.first().created_at
    else:
        first = Item.objects.filter(category=category).first().created_at
    return first
    
# Get latest Item
def get_latest(category):
    if category == None:
        latest = Item.objects.latest('created_at').created_at
    else:
        latest = Item.objects.filter(category=category).latest('created_at').created_at
    return latest

def gallery_pagination(request):
    # Main variables
    page_size = 8
    after = request.GET.get('after', None)
    before = request.GET.get('before', None)
    category = request.GET.get('category', None)
    page_size = int(request.GET.get('pageSize'))
    is_next = True
    is_prev = True

    # Check for null values
    if after == 'null':
        after = None
    if before == 'null':
        before = None
    if category == 'all':
        category = None
    
    if after:
        #susequent query for next
        if category == None:
            images = Item.objects.filter(created_at__gt=after).order_by('created_at')[:page_size]
        else:
            images = Item.objects.filter(created_at__gt=after, category=category).order_by('created_at')[:page_size]
    elif before:
        #susequent query for prev
        if category == None:
            images = Item.objects.filter(created_at__lt=before).order_by('-created_at')[:page_size]
        else:
            images = Item.objects.filter(created_at__lt=before, category=category).order_by('-created_at')[:page_size]
        images = list(reversed(images))
    else:
        # initial query
        if category == None:
            images = Item.objects.order_by('created_at')[:page_size]
        else: 
            images = Item.objects.filter(category=category).order_by('created_at')[:page_size]

    # Prepare next page link
    if images:
        last_image = images[len(images) - 1]
        next_page_after = last_image.created_at
        first_image = images[0]
        prev_page_before = first_image.created_at
        
    # If no more images are available
    else:
        return JsonResponse({"message": "No more images"}, status=201)

    # Packaging items to be sent by API
    items = [item.serialize() for item in images]

    # Check for next and/or prev pages
    if get_latest(category) == next_page_after:
        is_next = False
    if get_first(category) == prev_page_before:
        is_prev = False

    # Return jsonresponse
    return JsonResponse(
        {
            'items': items,
            'next_page': next_page_after,
            'prev_page': prev_page_before,
            'is_prev': is_prev,
            "is_next": is_next
        }
    , safe=False)


''' Get image by id '''
def get_image(request, id):
    item = Item.objects.get(pk=id)

    return JsonResponse(item.serialize(), safe=False)
