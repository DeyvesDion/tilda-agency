import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Agency from '../views/Agency/Agency.vue'
import Prestation from '../views/Prestation/Prestation.vue'
import Reference from '../views/Reference/Reference.vue'
// import Registration from '../views/registration/Registration.vue'
// import Help from '../views/help/Help.vue'
import Contact from '../views/Contact/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/agence-web',
    name: 'Agency',
    component: Agency
  },
  {
    path: '/prestation',
    name: 'Prestation',
    component: Prestation
  },
  {
    path: '/reference',
    name: 'Reference',
    component: Reference
  },
  // {
  //   path: '/aide',
  //   name: 'Help',
  //   component: Help
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router