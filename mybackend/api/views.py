from django.http import JsonResponse

def api_home(request):
    return JsonResponse({"message": "Welcome to the API!"})

def api_data(request):
    data = {
        "name": "Sowrab Iyengar",
        "role": "Python developer"
    }
    return JsonResponse(data)