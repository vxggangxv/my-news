<template>
  <list-item></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue';
export default {
  components: {
    ListItem,
  },
  created() {
    this.$emit('on:progress');
    this.$store.dispatch('FETCH_JOBS')
      .then(() => this.$emit('off:progress'))
      .catch(() => console.log('fail'));
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/listview.scss';
</style>