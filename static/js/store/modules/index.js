const state = {
	numbers: []
}

const getters = {

}

const actions = {
	getAllNumbers(context) {
		axios.get('numbers/')
			.then(function (response) {
				context.commit('setNumbers', response.data.numbers)
			})
			.catch(function (error) {
				console.log(error);
			})
		
	}
}

const mutations = {
	setNumbers(state, numbers) {
		state.numbers = numbers
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}