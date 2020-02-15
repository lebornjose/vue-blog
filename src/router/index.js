import Vue from 'vue'
import Router from 'vue-router';
import home from '../home.vue'
// import about from '../about.vue'
// import cat from '../cat.vue'
// import guest from '../guest.vue'
// import product from '../product.vue'
// import detail from '../detail.vue'
// import list from '../list.vue'
Vue.use(Router)

export default new Router({
	routes: [
		{
		  path: '/',
			redirect: {
				path: '/home',
      }
    },
    {
    	path: '/home',
			name: 'home',
    	component: home
    }
	]
})