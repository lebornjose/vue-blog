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
        <div class="search-form">
          <input type="text" placeholder="搜索" class="search-query">
        </div>
      </div>
      <ul class="x-list" id="J_list" v-for="quote in quotes" :key="quote.articleId">
        <li class="clearfix">
          <article><a @click="golist(quote.articleId)" class="title">{{quote.title}}</a>
            <div class="content" v-html="quote.summary"></div>
            <div class="article-info"><span><i class="icon-calendar"> </i>{{quote | date}}</span><span><i
              class="icon-book"> </i>{{quote.keyworwd}}</span><span><i
              class="icon-comments-alt"> </i>{{quote.reads}}</span><span><i class="icon-heart-empty"> </i>{{quote.ispost}}</span>
            </div>
          </article>
        </li>
      </ul>
      <div class="x-page"><a @click="onClick" target="_blank" id="J_page" data="1">点击查看更多</a></div>
      <a style="bottom: 110px;" class="go-top"><i class="icon-circle-arrow-up"></i></a>
    </div>
    <Foot></Foot>
    <model v-show="alert"></model>
  </div>
</template>
<style>
  .x-page a {
    cursor: pointer;
  }

  .expand-transition {
    transition: all .3s ease;
    height: 30px;
    padding: 10px;
    background-color: #eee;
    overflow: hidden;
  }

  .expand-enter, .expand-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
  }
</style>
<script>
  import model from './components/model'
  import Foot from './components/Foot'
  import $ from 'jquery'

  export default {
    components: {
      model: model,
      Foot: Foot
    },
    data () {
      return {
        quotes: '',
        index: 1,
        alert: false,
        v_search: ''
      }
    },
    methods: {
      onClick: function () {
        let page = this.$store.getters.getIndex
        this.$http.get('/blog/home/page/' + page).then(function (response) {
          if (response.data.length > 0) {
            this.quotes = this.quotes.concat(response.data)
            page++
            this.$store.commit('next', page)
          } else {
            this.alert = true
            setTimeout(() => {
              this.alert = false
            }, 2000)
          }
        })
      },
      golist: function (id) {
        this.$router.push({path: '/detail/' + id})
      }
    },
    mounted: function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('.go-top').css({
            bottom: '110px'
          })
        } else {
          $('.go-top').css({
            bottom: '-110px'
          })
        }
      })
      let self = this
      self.$http.get('/blog/home/page').then(function (response) {
        this.quotes = response.data
      }, function (response) {
        console.log(response.data)
      })
      let week = function () {
        let week = new Date().getDay()
        $('.cover-img').css('background-image', 'url(http://xinblog.oss-cn-qingdao.aliyuncs.com/' + week + '.jpg)')
      }
      week()
      $('.go-top').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 400)
      })
      $('.search-query').bind('keypress', function (event) {
        if (event.keyCode === 13) {
          var keyword = $(this).val()
          self.$http.get('/blog/home/jsonSearch/' + keyword).then(function (response) {
            this.quotes = response.data
          })
        }
      })
    }
  }
</script>
