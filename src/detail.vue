<template>
  <div class="content">
    <div class="x-about-content">
      <h2>{{article.title}}</h2>
      <article v-html="detail.content">
      </article>
      <div class="single-footer">
        <div class="prev-next">
          <!--          -->
          <router-link v-if="perv !== null" :to="'/detail/' + perv.articleId" class="before">
            <i class="icon-arrow-left"></i>上一篇:
          </router-link>
          <router-link v-if="perv !== null" :to="'/detail/' + perv.articleId">{{perv.title}}</router-link>
          <router-link v-if="next !== null" :to="'/detail/' + next.articleId" class="after">下一篇:</router-link>
          <router-link v-if="next !== null" :to="'/detail/' + next.articleId" class="next">{{next.title}}
          </router-link>
          <i v-if="next !== null " class="icon-arrow-right"></i>
        </div>
      </div>
      <div data-thread-key="1232423" data-title="留言板" data-url="http://leborn.me/" class="ds-thread">
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>
<style>
  a {
    cursor: pointer;
  }
</style>
<script>
  import Foot from './components/Foot1'

  export default {
    data () {
      return {
        article: '',
        detail: '',
        perv: null,
        next: null
      }
    },
    components: {
      Foot: Foot
    },
    mounted () {
      // $('body,html').animate({
      //   scrollTop: 0
      // }, 400)
      let articleId = this.$route.params.articleId
      this.$http.get('/blog/home/jsonDetail/' + articleId).then(function (response) {
        this.article = response.data.article[0]
        this.detail = response.data.detailVO
        if (response.data.article[1] !== null) {
          this.perv = response.data.article[1]
        }
        if (response.data.article[2] !== null) {
          this.next = response.data.article[2]
        }
      })
    }
  }
</script>
