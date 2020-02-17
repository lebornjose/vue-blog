<template>
  <div class="content">
    <div class="x-about-content">
      <h2>{{about.title}}</h2>
      <article v-html="about.content"></article>
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
