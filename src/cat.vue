<template>
  <div class="content">
    <div class="x-cat-content">
      <h2>文章分类</h2>
      <ul class="cat-list" v-for="cat in catList">
        <li><a v-link="{ path: '/list/'+ cat.categoryId}"> <i class="icon-star"></i>{{cat.title}}</a></li>
      </ul>
    </div>
  <Foot></Foot>
  </div>
</template>
<script>
import Foot from './components/Foot1'
export default{
  components: {
    Foot
  },
  data () {
    return {
      catList: ''
    }
  },
  ready: function () {
    this.$http.get('http://127.0.0.1:8000/blog/home/jsonCategory').then(function (response) {
      this.catList = response.data
      console.log(response.data)
    }, function (response) {
      console.log(response.data)
    })
  }
}
</script>