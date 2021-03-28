const IndexTemplate = `
	<div>
		<p>Index</p>
		<router-link to="/blog">
			Blog
		</router-link>
		<ul>
			<li v-for="num in numbers">
			[[ num ]]
			</li>
		</ul>
	</div>
`

const Index = {
	delimiters: ['[[', ']]'],
	data: function () { return { numbers: store.state.numbers } },
    template: IndexTemplate,
}

export { Index }
