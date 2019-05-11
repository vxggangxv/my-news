<template>
  <section class="sec post">
    <h1 class="text-hide">뉴스 기사 리스트</h1>
		<ul class="post-list">
			<li v-for="(item, index) in this.$store.state.ask" :key="item.id">
        <div class="row-tit">
          {{ index + 1 }}.
          <router-link :to="'/item/' + item.id">{{ item.title }}</router-link>
        </div>
        <div class="row-cmt">
          <small class="">
            {{ item.time_ago }} 
            by 
            <router-link :to="'/user/' + item.user">{{ item.user }}</router-link>
          </small>
        </div>
			</li>
		</ul>
  </section>
</template>

<script>
  import { fetchAsk } from '../api/index.js';

  export default {
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