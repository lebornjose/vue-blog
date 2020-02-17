import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

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

Vue.use(Vuex)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
