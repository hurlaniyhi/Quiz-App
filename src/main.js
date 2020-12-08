import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
//import "font-awesome/css/font-awesome.min.css";

Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


//library.add(faSpinner)
//Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)


const router = new VueRouter({
  routes: Routes,
  mode: "history"
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
