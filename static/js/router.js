import { 
  Index,
  Blog
} from './components.js'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
  ]
})

export { router }
