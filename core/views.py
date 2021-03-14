from random import randint
from django.views.generic.base import TemplateView

class IndexView(TemplateView):
	template_name = 'index.html'

	def get_context_data(self, *args, **kwargs):
		context = super(IndexView, self).get_context_data(*args, **kwargs)
		numbers = []
		for n in range(0,20):
			number = randint(0, 100)
			numbers.append(number)
		context['numbers'] = numbers
		return context
