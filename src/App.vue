<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
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

<style>
  body {
    font-family: "Noto Sans KR", Arial, Helvetica, sans-serif;
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
</style>