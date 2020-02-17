<template>
  <div class="content">
    <div class="x-guest-content">
      <div class="article">
        <h1>留言板</h1>
        <div class="article-info"><span>2014-04-05 11:37</span><span>字数: 21</span><span>阅读量: 5,334</span></div>
        <h2>在这里可以灌水、吹牛、扯淡，但不可以订外卖</h2>
        <div id="disqus_thread"></div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
  import Foot from './components/Foot1'

  export default {
    components: {
      Foot: Foot
    },
    mounted () {
      let d = document
      let s = d.createElement('script')
      s.src = 'https://lebornjose.disqus.com/embed.js'
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s)
    }
  }
</script>
