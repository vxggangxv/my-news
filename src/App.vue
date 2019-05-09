<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import ToolBar from './components/ToolBar.vue';

  export default {
    components: {
      ToolBar,
    }
  }
</script>

<style lang="scss">
  body {
    font-family: "Noto Sans KR", Arial, Helvetica, sans-serif;
    color: $primary-color;
  }

  a,
  a:active,
  a:focus {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  .text-hide {
    position: absolute;
    width: 0;
    height: 0;
    font: 0/0 sans-serif;
  }

  .fixed {
    position: fixed;
    width: 100%;
    z-index: 999;
  }

  .sec {position: relative;}

  .fade-enter-active, .fade-leave-active {
    // transition: all .5s;
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    // position: absolute;
    // top: 0;
    // left: 0;
    opacity: 0;
  }
</style>