from django.views.generic.base import TemplateView
from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token
from django.http import JsonResponse
import json

class UserView(TemplateView):
	def get(self, request):
		return JsonResponse(
			{
				'auth': request.user.is_authenticated,
				'csrftoken': get_token(request),
			}, 
			status=200
		)

class LoginView(TemplateView):
	def post(self, request):
		data = json.loads(request.body)

		username = data['username']
		password = data['password']

		user = authenticate(request, username=username, password=password)
		
		if user is not None:
			login(request, user)
			msg = 'logged in'
		else:
			msg = 'invalid credentials'

		return JsonResponse(
			{
				'msg': msg,
			}, 
			status=200
		)

class LogoutView(TemplateView):
	def get(self, request):
		logout(request)
		return JsonResponse(
			{
				'msg': 'logged out',
			}, 
			status=200
		)
