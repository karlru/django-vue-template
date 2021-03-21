var Home = Vue.component('home', {
	delimiters: ['[[', ']]'],
	data: function () { return { numbers: store.state.numbers } },
	template: '<p>helo</p>',
});

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
  ]
})
