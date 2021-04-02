const state = {
	authenticated: false,
	csrfToken: null,
}

const getters = {

}

const actions = {
	getUserStatus(context) {
		console.log('hereeee')
		axios.get('users/')
			.then(function (response) {
				context.commit('setAuthenticated', response.data.auth)
				context.commit('setCsrfToken', response.data.csrftoken)
			})
			.catch(function (error) {
				console.log(error);
			})
	},
	submitLoginForm({context, dispatch}, data) {
		axios.post(
			'users/login/', 
			{
				'username': data.username,
				'password': data.password,
			},
			{
				headers: {
					'X-CSRFTOKEN': state.csrfToken,
				}
			}
		)
			.then(function (response) {
				dispatch('getUserStatus')
			})
			.catch(function (error) {
				console.log(error);
			})
	},
	logout({context, dispatch}) {
		axios.get('users/logout/')
			.then(function (response) {
				dispatch('getUserStatus')
			})
			.catch(function (error) {
				console.log(error);
			})
	}
}

const mutations = {
	setAuthenticated(state, auth) {
		state.authenticated = auth
	},
	setCsrfToken(state, token) {
		state.csrfToken = token
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}