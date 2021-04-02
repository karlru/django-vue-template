from django.views.generic.base import TemplateView
from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token
from django.http import JsonResponse
import json
from .forms import UserRegisterForm

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
		err = ''

		username = data['username']
		password = data['password']

		user = authenticate(request, username=username, password=password)
		
		if user is not None:
			login(request, user)
		else:
			err = 'invalid credentials'

		return JsonResponse(
			{
				'err': err
			},
			status=200
		)

class LogoutView(TemplateView):
	def get(self, request):
		logout(request)
		return JsonResponse(
			{}, 
			status=200
		)

class RegisterView(TemplateView):
	def post(self, request):
		data = json.loads(request.body)
		err = ''

		form = UserRegisterForm(data)

		if form.is_valid():
			form.save()

			user = authenticate(request, username=data['username'], password=data['password1'])
			login(request, user)
		else:
			errs = []
			for field in form.errors:
				errs.append(form.errors[field][0])

			err = '; '.join(errs)

		return JsonResponse(
			{
				'err': err
			},
			status=200
		)


