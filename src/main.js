import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)
export const bus = new Vue()

const router = new VueRouter({
  routes: Routes,
  mode: "history"
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
