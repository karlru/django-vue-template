from django.urls import path
from .views import UserView, LoginView, LogoutView, RegisterView

urlpatterns = [
	path('', UserView.as_view()),
	path('login/', LoginView.as_view(), name='login'),
	path('logout/', LogoutView.as_view(), name='logout'),
	path('register/', RegisterView.as_view(), name='register'),
]
