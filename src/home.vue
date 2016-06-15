<template>
    <div class="x-recommed">
      <div class="left-aside">
        <div class="cover-img">
          <div class="x-block">
            <h1>Super xing</h1>
            <h3>颓废中保持乐观，忙碌中鄙视功利，永保一颗向往的心。</h3>
          </div>
        </div>
      </div>
      <div class="right-aside">
        <div class="x-page-title">
          <h5 class="title">梦想永远是现代式，而绝非将来式。</h5>
          <form id="" method="" action="" class="search-form">
            <input type="text" placeholder="搜索" class="search-query">
          </form>
        </div>
        <ul class="x-list" id="J_list" v-for="quote in quotes">
          <li class="clearfix">
            <article><a v-link="{ path: '/detail/'+quote.articleId}" class="title">{{quote.title}}</a>
              <div class="content">{{quote.summary}}</div>
              <div class="article-info"><span><i class="icon-calendar"> </i>{{quote | date}}</span><span><i class="icon-book"> </i>{{quote.keyworwd}}</span><span><i class="icon-comments-alt"> </i>{{quote.reads}}</span><span><i class="icon-heart-empty"> </i>{{quote.ispost}}</span></div>
            </article>
          </li>
        </ul>
        <div class="x-page"><a v-on:click="onClick" target="_blank" id="J_page" data="1">点击查看更多</a></div><a style="bottom: 110px;" class="go-top"><i class="icon-circle-arrow-up"></i></a>
      </div>
      <footer class="footer">
        <div class="links"> <a href="http://evilbinary.org/" target="_blank">邪恶二进制 </a><a href="http://hyphenlee.github.io/" target="_blank">hyphen</a><a href="http://www.blogbar.cc/" target="_blank">Blogbar</a><a href="http://coolshell.cn/" target="_blank">酷壳</a></div>
        <div class="copyright">© 2015 Super xing火星ICP备001号</div>
      </footer>
      <model v-show="alert"></model>
</template>
<style>
.x-page a{
  cursor: pointer;
}
</style>
<script>
import model from './components/model'
export default {
  components: {
    model: model
  },
  data () {
    return {
      quotes: '',
      index: 0,
      alert: false
    }
  },
  methods: {
    onClick: function () {
      this.$http.get('http://127.0.0.1:8000/blog/home/page/' + this.index).then(function (response) {
        if (response.data.length > 0) {
          this.quotes = this.quotes.concat(response.data)
          this.index++
        } else {
          this.alert = true
          setTimeout(() => {
            this.alert = false
          }, 2000)
        }
      }, function (response) {
        console.log(response.data)
      })
    }
  },
  ready: function () {
    this.$http.get('http://127.0.0.1:8000/blog/home/page').then(function (response) {
      this.quotes = response.data
    }, function (response) {
      console.log(response.data)
    })
  }
}
</script>