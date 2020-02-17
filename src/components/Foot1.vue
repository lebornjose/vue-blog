<template>
  <footer class="footer1">
    <div class="links">
      <a v-for="(item, index) in blogList" :key="index" :href="item.url" target="_blank">{{item.title}} </a>
    </div>
    <div class="copyright">{{copy}}</div>
  </footer>
</template>
<script>
  export default {
    computed: {
      blogList: function () {
        return this.$store.getters.getBlogList
      },
      copy: function () {
        return this.$store.getters.getCopy
      }
    }
  }
</script>
