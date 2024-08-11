from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
import os
from django.conf import settings
from .models import Image
from pathlib import Path
import random
from supabase import create_client, Client
from dotenv import load_dotenv
from django.views.decorators.csrf import csrf_exempt
import json

# views
def index(request, path):
    return render(request, 'ghadboungroup/index.html')

# Open sitemap.xml file
def sitemap(request):
    sitemap_path = os.path.join(settings.BASE_DIR, 'sitemap.xml')
    try:
        with open(sitemap_path, 'rb') as f:
            response = HttpResponse(f.read(), content_type='application/xml')
            response['Content-Disposition'] = 'inline; filename="sitemap.xml"'
            return response
    except FileNotFoundError:
        return HttpResponse("Sitemap not found.", status=404)

''' Get Images API route '''
# Check if user is admin
def isAdmin(request):
    isAdmin = request.user.is_superuser
    return JsonResponse({'isAdmin': isAdmin}, safe=False)

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
    # Filtering Queried Images
    try:
        if category == 'all':
            if limit == 0:
                if order =='newest':
                    images = Image.objects.all().order_by('-created_at')
                elif order == 'oldest':
                    images = Image.objects.all().order_by('created_at')
                elif order == 'random':
                    images = random.sample(list(Image.objects.all()))
            else:
                if order =='newest':
                    images = Image.objects.all().order_by('-created_at')[:limit]
                elif order == 'oldest':
                    images = Image.objects.all().order_by('created_at')[:limit]
                elif order == 'random':
                    images = random.sample(list(Image.objects.all()), limit)
        else:
            if limit == 0:
                if order =='newest':
                    images = Image.objects.filter(category=category).order_by('-created_at')
                elif order == 'oldest':
                    images = Image.objects.filter(category=category).order_by('created_at')
                elif order == 'random':
                    images = random.sample(list(Image.objects.filter(category=category)))
            else:
                if order =='newest':
                    images = Image.objects.filter(category=category).order_by('-created_at')[:limit]
                elif order == 'oldest':
                    images = Image.objects.filter(category=category).order_by('created_at')[:limit]
                elif order == 'random':
                    images = random.sample(list(Image.objects.filter(category=category)), limit)
    except ValueError:
        return JsonResponse({"message": "no enough images"}, status=201)
        
    # Return json response
    return JsonResponse([image.serialize() for image in images], safe=False)


''' Pagination view '''
# Get fist and latest Imagess 
# Get first image
def get_first(category):
    if category == None:
        first = Image.objects.first().created_at
    else:
        first = Image.objects.filter(category=category).first().created_at
    return first
    
# Get latest Image
def get_latest(category):
    if category == None:
        latest = Image.objects.latest('created_at').created_at
    else:
        latest = Image.objects.filter(category=category).latest('created_at').created_at
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
            images = Image.objects.filter(created_at__gt=after).order_by('created_at')[:page_size]
        else:
            images = Image.objects.filter(created_at__gt=after, category=category).order_by('created_at')[:page_size]
    elif before:
        #susequent query for prev
        if category == None:
            images = Image.objects.filter(created_at__lt=before).order_by('-created_at')[:page_size]
        else:
            images = Image.objects.filter(created_at__lt=before, category=category).order_by('-created_at')[:page_size]
        images = list(reversed(images))
    else:
        # initial query
        if category == None:
            images = Image.objects.order_by('created_at')[:page_size]
        else: 
            images = Image.objects.filter(category=category).order_by('created_at')[:page_size]

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
    images = [image.serialize() for image in images]

    # Check for next and/or prev pages
    if get_latest(category) == next_page_after:
        is_next = False
    if get_first(category) == prev_page_before:
        is_prev = False

    # Return jsonresponse
    return JsonResponse(
        {
            'items': images,
            'next_page': next_page_after,
            'prev_page': prev_page_before,
            'is_prev': is_prev,
            "is_next": is_next
        }
    , safe=False)


''' Get image by id '''
def get_image(request, id):
    image = Image.objects.get(pk=id)

    return JsonResponse(image.serialize(), safe=False)


''' Push Image to supabase storage bucket '''
# Load environment variables from .env file
load_dotenv()

# Setup supabase
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

# Upload Image
def upload_image(request):
    if request.method == "POST":
        # Extract 
        image_file = request.FILES.get('image')
        description = request.POST.get("description")
        category = request.POST.get("category")

        try:
            # Convert the InMemoryUploadedFile to bytes
            file_data = image_file.read()

            # Upload image to Supabase Storage
            bucket_name = 'images'
            file_name = f"_{image_file.name}"
            try:
                response = supabase.storage.from_(bucket_name).upload(file_name, file_data)
            except Exception as e:
                return JsonResponse({
                    "message": "Duplicate, image alreaddy exists",
                    "success": False
                }, safe=False)

            # If successful
            else:
                # Get the public URL of the uploaded image
                image_url = supabase.storage.from_(bucket_name).get_public_url(file_name)
            
                # Save image metadata and URL to Django database
                Image.objects.create(image_url=image_url, description=description, category=category)

            return JsonResponse({
                "message": "Image was successfuly saved",
                "success": True
            }, status=201)
        
        except AttributeError:
            return JsonResponse({
                "message": "Please supply image file",
                "success": False
            }, status=400)
    
# Edit Image
def edit_image(request, id):
    if request.method == "PUT":
        data = json.loads(request.body)
        new_description = data["description"]
        new_category = data["category"]
        print(data)

        # Get the requested image and edit it
        image = Image.objects.get(id=id)
        if new_category != '':
            if image.category != new_category:
                image.category = new_category
                image.save(update_fields=['category'])
        if image.description != new_description:
            image.description = new_description
            image.save(update_fields=['description'])   

        return JsonResponse({"message": "Image was successfully edited"}, status=201)

# Delete Image
def delete_image(request, id):
    if request.method == "DELETE":
        # Get requested image
        image = Image.objects.get(id=id)
        
        # Extract file name from the public path
        bucket_name = 'images'
        file_name = (image.image_url.split('/')[-1]).replace("?", "")

        try:
            # Delete image from supabase storage
            response = supabase.storage.from_(bucket_name).remove([file_name])
            # Delete image from django databae if successfull
            image.delete()

        except Exception as e:
            print(f"Exception occures{e}")
            return JsonResponse({"Exception": "exception occurred"}, status=201)

        # Return success message
        return JsonResponse({"message": "Image was successfully deleted"}, status=201)