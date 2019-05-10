<template>
  <section class="sec post">
		<h1 class="text-hide">뉴스 기사 리스트</h1>
		<ul class="post-list">
			<li v-for="(item, index) in this.$store.state.news" :key="item.id">
        <div class="row-tit">
          {{ index + 1 }}.
          <a :href="item.url">{{ item.title }}</a> 
          <template v-if="item.domain">
            <a :href="'//' + item.domain" target="_blank" class="domain">({{ item.domain }})</a>  
          </template>
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
// import { fetchNews } from '../api/index.js';

export default {
  created() {
		this.$store.dispatch('FETCH_NEWS')
      .then(() => console.log('sucess'))
      .catch(() => console.log('fail'));
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/listview.scss';
</style>
