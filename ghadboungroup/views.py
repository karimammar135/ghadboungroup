from django.shortcuts import render

# views
def index(request):
    return render(request, 'ghadboungroup/index.html')
