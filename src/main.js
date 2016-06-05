import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import home from './home.vue'
import about from './about.vue'
import cat from './cat.vue'
import guest from './guest.vue'
import product from './product.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter()
/* eslint-disable no-new */

router.map({
  '/home': {
    component: home
  },
  '/about': {
    component: about
  },
  '/cat': {
    component: cat
  },
  '/guest': {
    component: guest
  },
  '/product': {
    component: product
  }
})

router.redirect({
  '*': '/home'
})
router.start(App, 'app')
