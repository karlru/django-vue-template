const BlogTemplate = `
	<div>
		<p>Blog</p>
		<router-link to="/">
			Index
		</router-link>
	</div>
`

const Blog = {
	delimiters: ['[[', ']]'],
    template: BlogTemplate,
}

export { Blog }
