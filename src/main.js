import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vant from '@/plugins/vant'
import store from './store'

import '@/styles/reset.css'
import '@/styles/fonts/iconfont.css'
import 'vant/lib/index.less'
import 'amfe-flexible'
const baseUrl = 'http://liufusong.top:8080'
Vue.prototype.baseUrl = baseUrl
Vue.use(vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
