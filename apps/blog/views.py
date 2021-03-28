from django.views.generic import ListView, DetailView
from .models import Post

class PostListView(ListView):
	model = Post
	context_object_name = 'data'
	template_name = 'base.html'

class PostDetailView(DetailView):
	model = Post
	template_name = 'base.html'