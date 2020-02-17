import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    blog: [{url: 'http://evilbinary.org/', title: '邪恶二进制'},
      {url: 'http://hyphenlee.github.io/', title: 'hyphen'},
      {url: 'https://coolshell.cn/', title: '酷壳'},
      {url: 'https://www.zhihu.com/people/huang_xing', title: 'jose'}]
  },
  getters: {
    getBlogList (state) {
      return state.blog
    }
  }
})

export default store
