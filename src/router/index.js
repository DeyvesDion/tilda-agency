import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Agency from '../views/Agency/Agency.vue'
// import RegisterBoat from '../views/registerBoat/RegisterBoat.vue'
// import Connection from '../views/connection/Connection.vue'
// import Registration from '../views/registration/Registration.vue'
// import Help from '../views/help/Help.vue'
// import Contact from '../views/contact/Contact.vue'

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
  // {
  //   path: '/connexion',
  //   name: 'Connection',
  //   component: Connection
  // },
  // {
  //   path: '/inscription',
  //   name: 'Registration',
  //   component: Registration
  // },
  // {
  //   path: '/aide',
  //   name: 'Help',
  //   component: Help
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: Contact
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router