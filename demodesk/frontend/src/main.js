import Vue from 'vue'
import store from '@/store'
import router from '@/router'

import VueMaterial from 'vue-material'
import Vuelidate from 'vuelidate'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'






import App from '@/App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false


Vue.use(VueMaterial)
Vue.use(Vuelidate)




new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
