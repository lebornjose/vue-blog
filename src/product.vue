<template>
  <div class="content">
    <div class="x-pro-content" v-for="product in productList">
      <dl class="left">
        <dt><img v-bind:src="product.commendId | photo" alt="Kooteam办公" title="办公也扮酷"></dt>
        <dd class="title"><a href="#" target="_blank">{{product.title}}</a></dd>
        <dd class="content">{{product.describe}}</dd>
        <dd class="info"><i class="icon-dropbox"></i>{{product.note}}</dd>
      </dl>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
import Foot from './components/Foot1'
export default{
  components: {
    Foot
  },
  data () {
    return {
      productList: ''
    }
  },
  ready: function () {
    this.$http.get('http://127.0.0.1:8000/blog/home/jsonProduct').then(function (response) {
      this.productList = response.data
    }, function (response) {
      console.log(response.data)
    })
  }
}
</script>