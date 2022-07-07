import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont.css'
import * as echarts from 'echarts'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$config = window.APP_CONFIG
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
