from django.shortcuts import render
from django.http.response import JsonResponse






def homePageView(request):
    return render(request , "base.html")

def chatRequest(request):
    return JsonResponse({"message" : "sdlkfjsldjflsdjflsdjf"} , status=200)