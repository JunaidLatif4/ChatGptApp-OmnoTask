import os
from django.shortcuts import render
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView

# OpenAi :
import openai

# Envs :
from dotenv import load_dotenv
load_dotenv()





def homePageView(request):
    return render(request , "base.html")


# ChatGpt View :
ApiKey = os.getenv("GPT_KEY" , None)

class chatRequest(APIView):
    def post(self , request):
        print("REQUEST ----> ",request.data )
        userRequest = request.data["message"]
        if userRequest :
            openai.api_key = ApiKey

            result = openai.Completion.create(
                engine = 'text-davinci-003',
                prompt = userRequest,
                max_tokens = 300,
                temperature = 0.5
            )
            result["message"] = userRequest
            print("RESULT ------- >" , result)
            return JsonResponse(result , status=200)
        return JsonResponse({"message" : "Message is Requried"} , status=400)
    
# class EmailLogin(APIView):
#     def post(self , request):
#         userEmail = request.data["email"]
#         if userEmail :
            
#             return
#         return JsonResponse({"message":"Email is Requried"} , status=400)
