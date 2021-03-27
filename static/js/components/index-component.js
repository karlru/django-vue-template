const IndexTemplate = `
	<ul>
		<li v-for="num in numbers">
		[[ num ]]
		</li>
	</ul>
`

const Index = {
	delimiters: ['[[', ']]'],
	data: function () { return { numbers: store.state.numbers } },
    template: IndexTemplate,
}

export { Index }
