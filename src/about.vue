<template>
  <div class="content">
    <div class="x-about-content">
      <h2>{{about.title}}</h2>
      <article v-html="about.content"></article>
    </div>
    <footer class="footer1">
      <div class="links"><a href="http://evilbinary.org/" target="_blank">邪恶二进制 </a><a
        href="http://hyphenlee.github.io/" target="_blank">hyphen</a><a href="http://www.blogbar.cc/" target="_blank">Blogbar</a><a
        href="http://coolshell.cn/" target="_blank">酷壳</a></div>
      <div class="copyright">© 2015 Super xing火星ICP备001号</div>
    </footer>
  </div>
</template>
<script>
  // import Foot1 from './components/Foot1'  ／／因为过渡动画的原因，取消这个模式的加载
  export default {
    // components: {
    //   Foot1
    // },
    data () {
      return {
        about: ''
      }
    },
    mounted: function () {
      this.$http.get('/blog/home/jsonAbout/1504202124283691142').then(function (response) {
        this.about = response.data
        console.log(response.data)
      }, function (response) {
        console.log(response)
      })
    }
  }
</script>
