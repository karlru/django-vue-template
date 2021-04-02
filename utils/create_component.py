from shutil import copyfile
from sys import argv
from os.path import abspath, dirname, join, exists
from os import remove

class Component:
	def __init__(self, name):
		self.name = name.capitalize()
		self.files = []
		self.staticDir = abspath(join(dirname(__file__), '../static/js'))

		self.newComponent()

	def newComponent(self):
		self.createComponent()
		self.createModule()

	def createComponent(self):
		templateFile = f'{self.staticDir}/components/template-component.js'
		componentFile = f'{self.staticDir}/components/{self.name.lower()}-component.js'

		with open(templateFile, 'r') as template:
			templateText = template.read()

		templateText = templateText.replace('$TEMPLATE_NAME', self.name)

		try:
			with open(componentFile, 'x') as component:
				component.write(templateText)
		except OSError:
			self.stopExecution('template file with specified name already exists')

		self.files.append(componentFile)

	def createModule(self):
		templateFile = f'{self.staticDir}/store/modules/template.js'
		moduleFile = f'{self.staticDir}/store/modules/{self.name.lower()}.js'

		if exists(moduleFile):
			self.stopExecution('module file with specified name already exists')

		try:
			copyfile(templateFile, moduleFile)
		except:
			self.stopExecution('error creating module file')

		self.files.append(moduleFile)

	def editStore(self):
		templateFile = f'{self.staticDir}/store/store.js'
		storeFile = f'{self.staticDir}/store/store.js.tmp'

		copyfile(templateFile, storeFile)

		with open(storeFile, 'r') as store:
			last_line = ''

			for count, line in enumerate(store):
				if count == 0:
					last_line = line
					#write line
					continue

				if last_line.startswith('import') and not line.startswith('import'):
					# write new import line
					pass

				last_line = line

	def stopExecution(self, error_message=''):
		print(error_message)

		for file in self.files:
			remove(file)

		quit()

if __name__ == '__main__':
	name = argv[1]
	
	if not name or type(name) != str:
		print('first argument must be a string containing component name')
		quit()
	
	Component(name)
