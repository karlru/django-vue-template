const state = {
	posts: []
}

const getters = {

}

const actions = {
	getAllPosts(context) {
		axios.get('blog/posts/')
			.then(function (response) {
				context.commit('setPosts', response.data.posts)
			})
			.catch(function (error) {
				console.log(error);
			})
		
	}
}

const mutations = {
	setPosts(state, posts) {
		state.posts = posts
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}