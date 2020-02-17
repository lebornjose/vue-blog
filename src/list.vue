<template>
  <div class="content">
    <div class="x-list-content">
      <h2>文章列表</h2>
      <ul v-for="article in articleList" :key="article.articleId">
        <li><a v-link="{ path: '/detail/'+article.articleId}">{{article.title}}</a></li>
      </ul>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
  import Foot from './components/Foot1'

  export default {
    data () {
      return {
        articleList: ''
      }
    },
    components: {
      Foot: Foot
    },
    mounted () {
      let categoryId = this.$route.params.categoryId
      this.$http.get('/blog/home/jsonList/' + categoryId + '').then(function (response) {
        this.articleList = response.data
      }, function (response) {

      })
    }
  }
</script>
