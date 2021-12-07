import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Transactions from './components/Transactions.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/user/login',
    name: 'logIn',
    component: LogIn,
    meta: { requiresAuth: false, onlyNotAuth: true}
  },
  {
    path: '/user/signup',
    name: 'signUp',
    component: SignUp,
    meta: {requiresAuth: false, onlyNotAuth: true}
  },
  {
    path: '/user/transactions',
    name: 'transactions',
    component: Transactions,
    meta: { requiresAuth: true, onlyNotAuth: false}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router
