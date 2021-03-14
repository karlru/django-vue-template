from django.db import models
from PIL import Image
from ckeditor.fields import RichTextField


class Post(models.Model):
	title = models.CharField(max_length=100)
	date_added = models.DateField(auto_now_add=True)
	background_image = models.ImageField(upload_to='static/img')
	content = RichTextField()

	class Meta:
		ordering = ['id']

	def __str__(self):
		return self.title