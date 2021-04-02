from django.views.generic.base import TemplateView
from django.http import JsonResponse
from .models import Post

class PostListView(TemplateView):
	posts = list(Post.objects.values())

	def get(self, request):
		return JsonResponse({'posts': self.posts}, status=200)
		