<template>
  <!--  positionClass-->
  <div class="alert-wrapper" transition="fadeIn">
    <div class="alertBox">亲，只写这么多了！
    </div>
  </div>
</template>

<style scope>
  .alert-wrapper {
    position: fixed;
    top: 50%;
    left: 0;
    text-align: center;
    width: 100%;
    transform: translate(0, -50%);
    transition: opacity .3s linear;
    z-index: 99999;
  }

  .alert-wrapper.alert-bottom {
    bottom: 10%;
    top: auto;
    transform: translate(0, 0);
  }

  .alert-wrapper.alert-top {
    top: 10%;
    bottom: auto;
    transform: translate(0, 0);
  }

  .alertBox {
    padding: 15px 20px;
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 3px;
    font-size: 0.9em;
    color: #fff;
    max-width: 80%;
    -webkit-user-select: none;
  }

  .fadeIn-transition {
    opacity: 1;
  }

  .fadeIn-leave,
  .fadeIn-enter {
    opacity: 0;
  }
</style>
