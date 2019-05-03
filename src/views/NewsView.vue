<template>
  <section class="sec post">
		<h1 class="text-hide">뉴스 기사 리스트</h1>
		<ul class="post-list">
			<li v-for="news in this.$store.state.news" :key="news.id">
				<a :href="news.url">{{ news.title }}</a>
			</li>
		</ul>
    {{ this.$store.state.news }}
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
.sec.post {
	
}
</style>
