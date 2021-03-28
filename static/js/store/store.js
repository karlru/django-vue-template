import index from './modules/index.js'
import blog from './modules/blog.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		index,
		blog,
	}
})

export { store }