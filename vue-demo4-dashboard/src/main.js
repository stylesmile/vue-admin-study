import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './router/permission' // permission control
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/base.less'
import '@/styles/element-ui.less'
import '@/styles/iconfont.less'
import '@/styles/index.less' // global css

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
