<template>
  <div class="x-cat-content">
    <h2>文章分类</h2>
    <ul class="cat-list">
      <li><a href="list.html"> <i class="icon-star"></i>个人感悟</a></li>
      <li><a href="list.html"> <i class="icon-star"></i>技术体会</a></li>
      <li><a href="list.html"> <i class="icon-star"> </i>热爱前端</a></li>
      <li><a href="list.html"> <i class="icon-star"></i>我是Super man</a></li>
    </ul>
  </div>
  <Foot></Foot>
</template>
<script>
import Foot from './components/Foot1'
export default{
  components: {
    Foot
  }
}
</script>