import { Index } from './components/index-component.js'
import { Blog } from './components/blog-component.js'
import { Auth } from './components/auth-component.js'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
    },
  ]
})

export { router }
