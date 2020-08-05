from django.shortcuts import render
import json


# Create your views here.
def index(request):
    f = open("chat.json").read()
    #deta = json.loads(f.read())

    return render(request, 'honda_app/main.html', context={'data' : f})
