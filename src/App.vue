<template>
  <div id="app">
    <!-- <progress-bar :loading="loading"></progress-bar> -->
    <spinner :loading="loading"></spinner>
    <tool-bar></tool-bar>
    <transition name="routing-fade" mode="out-in">
      <router-view @on:progress="onProgress" @off:progress="offProgress"></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
// import ProgressBar from './components/ProgressBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    Spinner,
    // ProgressBar,
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    onProgress() {
      this.loading = true;
    },
    offProgress() {
      this.loading = false;
    }
  },
  created() {
    bus.$on('on:progress', this.onProgress);
    bus.$on('off:progress', this.offProgress);
  }
}
</script>

<style lang="scss">
  body {
    font-family: "Noto Sans KR", Arial, Helvetica, sans-serif;
    color: $primary-color;
  }

  a,
  a:focus {
    text-decoration: none;
    color: inherit;
  }

  a:active,
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
    position: fixed !important;
    width: 100%;
    z-index: 999;
  }

  .sec {
    position: relative;
  }

  /* Router Transition */
  .routing-fade-enter-active,
  .routing-fade-leave-active {
    transition: opacity .3s ease;
  }

  .routing-fade-enter,
  .routing-fade-leave-to

  /* .routing-fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }
</style>