const IndexTemplate = `
	<div>
		<p>Index</p>

		<router-link to="/blog">
			Blog
		</router-link>
		</br>
		<router-link to="/auth">
			Auth
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
	computed: {
		numbers: function() { 
			return this.$store.state.index.numbers
		}
	},
    template: IndexTemplate,
    created: function() {
    	this.$store.dispatch('getAllNumbers')
    }
}

export { Index }
