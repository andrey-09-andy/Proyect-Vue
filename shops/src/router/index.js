import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//import ProductoDetalles from '../components/productoS';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
   
    component: () => import('../views/About.vue')
  },
  {
    path:'/primero',
    name:'primero',
  
    component:()=>import('../views/primero')
  },
 
  {
    path:'/productos', 
    name:'productos',
  
    component:()=>import('../views/productos.vue')
  },
{
  path:'/detalles/:id',
  name:'Detalles',
  component:()=>import('../components/Detalles')
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
