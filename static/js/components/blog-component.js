const BlogTemplate = `
	<div>
		<p>Blog</p>

		<router-link to="/">
			Index
		</router-link>
		</br>
		<router-link to="/auth">
			Auth
		</router-link>
		
		<ul>
			<li v-for="post in posts">
				[[ post.title ]]
			</li>
		</ul>
	</div>
`

const Blog = {
	delimiters: ['[[', ']]'],
	template: BlogTemplate,
	computed: {
		posts: function() {
			return this.$store.state.blog.posts
		}
	},
	created: function() {
		this.$store.dispatch('getAllPosts')
	}
}

export { Blog }
