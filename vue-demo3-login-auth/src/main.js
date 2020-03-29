import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './router/permission' // permission control
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
