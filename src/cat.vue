<template>
  <div class="content">
    <div class="x-cat-content">
      <h2>文章分类</h2>
      <ul class="cat-list" v-for="cat in catList" :key="cat.categoryId">
        <li>
          <router-link :to="'/list/' + cat.categoryId"><i class="icon-star"></i>{{cat.title}}</router-link>
        </li>
      </ul>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
  import Foot from './components/Foot1'

  export default {
    components: {
      Foot
    },
    data () {
      return {
        catList: ''
      }
    },
    mounted: function () {
      this.$http.get('/blog/home/jsonCategory').then(function (response) {
        this.catList = response.data
      }, function (response) {
      })
    }
  }
</script>
