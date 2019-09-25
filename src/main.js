import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store/index.js'
import api from '@/api/api.js'
import request from '@/api/request.js'
import config from '@/config/config.js'
import '@/api/global.js'
import wx from "weixin-js-sdk";


Vue.prototype.api = api
Vue.prototype.$request = request
Vue.prototype.config = config
Vue.prototype.$wx = wx

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')