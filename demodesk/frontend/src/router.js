import Vue from 'vue'
import VueRouter from 'vue-router'

import MainScreen from '@/components/MainScreen.vue'
import EmailForm from '@/components/EmailForm.vue'

const routes = [
  {path: '*', component: MainScreen},
  {path: '/email', component: EmailForm}
]

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) { return {x: 0, y: 0} },
  mode: 'history',
  routes
})

export default router
