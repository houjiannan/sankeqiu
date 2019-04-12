// The Vue b uild version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import App from './App'
import './assets/common.css'
import Home from './components/Home.vue'
import Phone from './components/Phone.vue'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
      path: "/",
      component: Home
    },
    {
      path: "/phone",
      component: Phone
    }
  ],
  mode: "history"
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
