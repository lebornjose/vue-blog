<template>
  <div>
    <div class="x-qaq"><a href="index.html" class="cd">兴</a></div>
    <div class="x-nvabar x-nvabar-jianshu expanded">
      <div class="dropdown">
        <router-link to='home' title="Super xing" class="active logo"><b>兴</b></router-link>
      </div>
      <div class="x-menu">
        <ul class="items">
          <li class="menu-items-type">
            <router-link to='about' title="关于Super xing"><i
              class="icon-group"></i></router-link>
          </li>
          <li class="menu-items-tyoe">
            <router-link to='cat' title="文章分类"><i
              class="icon-book"></i></router-link>
          </li>
          <li class="menu-items-type">
            <router-link to='guest' title="留言板"><i
              class="icon-comments"></i></router-link>
          </li>
          <li class="menu-items-type">
            <router-link to='/product' title="推荐"><i
              class="icon-move"></i></router-link>
          </li>
          <li class="menu-items-type"><a href="#" title="订阅"><i class="icon-magic"></i></a></li>
        </ul>
      </div>
    </div>
    <div style="display:none" id="J_spinner" class="spinner">
      <div class="cube1"></div>
      <div class="cube2"></div>
    </div>
    <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>
<style>
  @import url('./assets/blog.css');

  .view {
    transition: all .5s ease;
  }

  .test-enter, .test-leave {
    opacity: 0;
    transform: translate3d(20px, 0, 0);
  }

  [v-cloak] {
    display: none;
  }

  .router-link-active {
    background: #e17967;
    color: #fff !important;
  }
</style>
<script>
  export default {
    props: ['homeTag', 'aboutTag', 'catTag', 'guestTag', 'productTag', 'detailTag']
  }
</script>
