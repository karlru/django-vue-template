from django.urls import path
from .views import UserView, LoginView, LogoutView

urlpatterns = [
	path('', UserView.as_view()),
	path('login/', LoginView.as_view(), name="login"),
	path('logout/', LogoutView.as_view(), name="logout"),
]