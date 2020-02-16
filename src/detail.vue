<template>
  <div class="content">
    <div class="x-about-content">
      <h2>{{article.title}}</h2>
      <article>
        {{{detail.content}}}
      </article>
      <div class="single-footer">
        <div class="prev-next"><a v-if="perv !=null " v-link="{ path: '/detail/'+perv.articleId }" class="before"> <i
          class="icon-arrow-left"></i>上一篇: </a><a v-if="next !=null" v-link="{ path: '/detail/'+perv.articleId }">{{perv.title}}</a><a
          v-if="next !=null " title="MySQL字段数据类型" class="after">下一篇: </a><a v-if="next !=null "
                                                                            v-link="{ path: '/detail/'+next.articleId }"
                                                                            class="next">{{next.title}}</a><i
          v-if="next !=null " class="icon-arrow-right"></i></div>
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
  import $ from 'jquery'
  import Foot from './components/Foot1'

  export default {
    components: {
      Foot: Foot
    },
    data () {
      return {
        article: '',
        detail: '',
        perv: '',
        next: ''
      }
    },
    route: {
      data: function () {
        $('body,html').animate({
          scrollTop: 0
        }, 400)
        var articleId = this.$route.params.articleId
        this.$http.get('/blog/home/jsonDetail/' + articleId + '').then(function (response) {
          this.article = response.data.article[0]
          this.detail = response.data.detailVO
          this.perv = response.data.article[1]
          this.next = response.data.article[2]
        }, function (response) {
          console.log(response.data.article)
        })
      }
    }
  }
</script>
