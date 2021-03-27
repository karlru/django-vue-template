from random import randint
import json
from django.views.generic.base import TemplateView

class IndexView(TemplateView):
	template_name = 'base.html'

	def get_context_data(self, *args, **kwargs):
		context = super(IndexView, self).get_context_data(*args, **kwargs)
		numbers = []
		for n in range(0,20):
			number = randint(0, 100)
			numbers.append(number)
		name = 'karl'

		data = {
			'numbers': numbers,
			'name': name,
		}

		context['data'] = json.dumps(data)

		return context
