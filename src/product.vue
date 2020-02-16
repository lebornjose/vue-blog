<template>
  <div class="content">
    <div class="x-pro-content" v-for="product in productList" :key="product.commendId">
      <dl class="left">
        <dt><img :src="product.commendId | photo" alt="Kooteam办公" title="办公也扮酷"></dt>
        <dd class="title"><a :href="product.url" target="_blank">{{product.title}}</a></dd>
        <dd class="content">{{product.describe}}</dd>
        <dd class="info"><i class="icon-dropbox"></i>{{product.note}}</dd>
      </dl>
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
        productList: ''
      }
    },
    mounted: function () {
      this.$http.get('/blog/home/jsonProduct').then(function (response) {
        this.productList = response.data
      }, function (response) {
        console.log(response.data)
      })
    }
  }
</script>
