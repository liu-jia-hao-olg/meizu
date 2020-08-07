import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from '../components/Login/Post.vue'
import Login from '../components/Login/login.vue'
import We from '../components/TabBar/We.vue'
import Sub from '../components/Sub/Sub.vue'
import Home from '../components/Home/Home.vue'
import Message from '../components/Message/Message.vue'
import Listen from '../components/Listen/Listen.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/TabBar',
      name: 'We',
      component: We
      },
    {
      path: '/Post',
      name: 'Post',
      component: Post
    },

    {
    path: '/Login',
    name: 'Login',
    component: Login
    },
    {
      path: '/Sub',
      name: 'Sub',
      component: Sub
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/Listen',
      name: 'Listen',
      component: Listen
    },
    
    
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
