import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 导入全局的样式表
import './assets/css/global.css'
// 导入进度条的样式
import '../node_modules/nprogress/nprogress.css'

// 引用axios
// import axios from 'axios'
// Vue.prototype.$http = axios
// // 定义请求的根路径
// axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
