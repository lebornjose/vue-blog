import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    blog: [{url: 'http://evilbinary.org/', title: '邪恶二进制'},
      {url: 'http://hyphenlee.github.io/', title: 'hyphen'},
      {url: 'https://coolshell.cn/', title: '酷壳'},
      {url: 'https://www.zhihu.com/people/huang_xing', title: 'jose'}],
    copyRight: '© 2015 Super xing火星ICP备',
    page: 1 // 首页分页
  },
  getters: {
    getBlogList (state) {
      return state.blog
    },
    getCopy (state) {
      return state.copyRight
    },
    getIndex (state) {
      return state.page
    }
  },
  mutations: {
    next (state, val) {
      state.page = val
    }
  }
})

export default store
