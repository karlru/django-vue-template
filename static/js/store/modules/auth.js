const state = {
	authenticated: false,
	csrfToken: null,
}

const getters = {

}

const actions = {
	getUserStatus(context) {
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
				if(response.data.err) {
					alert(response.data.err)
				}
				dispatch('getUserStatus')
			})
			.catch(function (error) {
				console.log(error);
			})
	},
	submitRegisterForm({context, dispatch}, data) {
		axios.post(
			'users/register/', 
			{
				'username': data.username,
				'password1': data.password1,
				'password2': data.password2,
			},
			{
				headers: {
					'X-CSRFTOKEN': state.csrfToken,
				}
			}
		)
			.then(function (response) {
				if(response.data.err) {
					alert(response.data.err)
				}
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
