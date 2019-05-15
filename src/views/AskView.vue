<template>
  <list-item></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import { fetchAsk } from '../api/index.js';

export default {
  components: {
    ListItem,
  },
  created() {
    this.$emit('on:progress');
    this.$store.dispatch('FETCH_ASK')
      .then(() => this.$emit('off:progress'))
      .catch(() => console.log('fail'));
      
    // fetchAsk()
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error));
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/listview.scss';
</style>