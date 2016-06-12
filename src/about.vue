<template>
    <div class="x-about-content">
      <h2>{{about.title}}</h2>
      <article> 
        {{{about.content}}}   <!-- 绑定html元素要  {{{}}} cat4ssx-->
      </article>
    </div>
    <Foot1></Foot1>
</template>
<script>
import Foot1 from './components/Foot1'
export default{
  components: {
    Foot1
  },
  data () {
    return {
      about: ''
    }
  },
  ready: function () {
    this.$http.get('http://127.0.0.1:8000/blog/home/jsonAbout/1504202124283691142').then(function (response) {
      this.about = response.data
      console.log(response.data)
    }, function (response) {
      console.log(response)
    })
  }
}
</script>