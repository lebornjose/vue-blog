import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import home from './home.vue'
import about from './about.vue'
import cat from './cat.vue'
import guest from './guest.vue'
import product from './product.vue'
import detail from './detail.vue'
import list from './list.vue'

Vue.filter('date', function (value) {
  return new Date(parseInt(value.pubtime) * 1000).toLocaleString().substr(0, 9)
})

Vue.filter('photo', function (value) {
  console.log(value)
  var p1 = value.substring(0, 4)
  var p2 = value.substring(4, 6)
  var p3 = value.substring(6)
  var src = 'http://www.leborn.me/upload/' + p1 + '/' + p2 + '/' + p3 + '.jpg'
  return src
})

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter()
Vue.http.options.emulateJSON = true
/* eslint-disable no-new */

router.map({
  '/home': {
    name: 'home',
    component: home
  },
  '/about': {
    name: 'about',
    component: about
  },
  '/cat': {
    name: 'cat',
    component: cat
  },
  '/guest': {
    name: 'guest',
    component: guest
  },
  '/product': {
    name: 'product',
    component: product
  },
  '/detail/:articleId': {
    name: 'detail',
    component: detail
  },
  '/list/:categoryId': {
    name: 'list',
    component: list
  }
})

router.redirect({
  '*': '/home'
})
router.start(App, 'app')
