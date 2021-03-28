from random import randint
from django.http import JsonResponse
from django.views.generic.base import TemplateView

class IndexView(TemplateView):
	def get(self, request):
		numbers = []

		for n in range(0,20):
			number = randint(0, 100)
			numbers.append(number)

		return JsonResponse({'numbers': numbers}, status=200)
