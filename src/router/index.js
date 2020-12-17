import Vue from 'vue'
import VueRouter from 'vue-router'
import Personal from '../views/Personal.vue'
import Order from '../views/Order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Personal',    
    component: Personal
  },
  {
    path:'/order/:id',
    component: Order
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
