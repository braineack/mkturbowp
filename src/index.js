import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'assets/css/app.styl'
import Home from './components/Home.vue'

import store from './store/store'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

// routing
/* eslint-disable-next-line no-new */
var router = new VueRouter({
  routes: [
    { path: '/', component: Home }
  ]
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App)
})
