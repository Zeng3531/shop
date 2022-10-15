import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import Nprogress from 'nprogress'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/login', component: () => { return import("../components/login.vue") },
    },
    {
      path: '/home', component: () => { return import("../views/Home.vue") },
    },
  ]
})

// 导航条的使用
Nprogress.start()
// 关闭进度条圆圈样式
Nprogress.configure({
  showSpinner: false
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // // 获取token
  if (store.state.token == '') return next('/login')
  console.log(store.state.token);
  next()
})

// 后守卫
router.afterEach((to, from,) => {
  // 关闭进度条
  Nprogress.done()
})

export default router
