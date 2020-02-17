<template>
  <footer class="footer">
    <div class="links">
      <a v-for="(item, index)" :href="item.url" target="_blank">{{item.title}} </a>
    </div>
    <div class="copyright">© 2015 Super xing火星ICP备</div>
  </footer>
</template>
<script>
  export default {
    computed () {
      blogList: function () {
        return this.$store.getters.getBlogList()
      }
    }
  }
</script>
