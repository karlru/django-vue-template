from django.views.generic import ListView, DetailView
from .models import Post

class PostListView(ListView):
	model = Post
	context_object_name = 'posts'
	template_name = 'blog/blog_home.html'

class PostDetailView(DetailView):
	model = Post
	template_name = 'blog/blog_post.html'