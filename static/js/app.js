var a = DATALIBRARY.getData();

console.log(a);

/*Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		numbers: [
		'1',
		'2',
		'3',
		],
	},
});

var NumberList = Vue.component('number-list', {
	delimiters: ['[[', ']]'],
	data: function () { return { numbers: store.state.numbers } },
	template: '#numbers-list-template',
});

const routes = [
	{ component: NumberList, path: '/', },
];

const router = new VueRouter({
	mode: 'history',
	routes: routes,
});

const app = new Vue({
	router,
	store,
}).$mount('#app');*/
