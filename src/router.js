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
    component: LogIn
  },
  {
    path: '/user/signup',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/user/transactions',
    name: 'transactions',
    component: Transactions
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
