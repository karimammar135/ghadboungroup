from django.shortcuts import render

# views
def index(request, path):
    return render(request, 'ghadboungroup/index.html')
