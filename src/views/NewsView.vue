<template>
  <list-item></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import { fetchNews } from '../api/index.js';

export default {
  components: {
    ListItem,
  },
  created() {
    this.$emit('on:progress');
		this.$store.dispatch('FETCH_NEWS')
      .then(() => this.$emit('off:progress'))
      // .then(() => console.log('sucess'))
      .catch(() => console.log('fail'));
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/listview.scss';
</style>
