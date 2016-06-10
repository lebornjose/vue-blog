import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import home from './home.vue'
import about from './about.vue'
import cat from './cat.vue'
import guest from './guest.vue'
import product from './product.vue'

Vue.filter('date', function (value) {
  return new Date(parseInt(value.pubtime) * 1000).toLocaleString().substr(0, 9)
})

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter()
Vue.http.options.emulateJSON = true
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
