import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import '@/assets/css/tailwind.css'
import store from './store'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GA_ID,
  router
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
