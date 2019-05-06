<template>
  <section class="sec post">
		<h1 class="text-hide">뉴스 기사 리스트</h1>
		<ul class="post-list">
			<li v-for="news in this.$store.state.news" :key="news.id">
        <div class="row-tit">
          <a :href="news.url">{{ news.title }}</a> <small class="domain">({{ news.domain }})</small>
          <!-- <router-link :to="'/item/' + news.id">{{ news.title }}</router-link> <small class="domain">({{ news.domain }})</small> -->
        </div>
        <div class="row-cmt">
          <small class="">
            {{ news.time_ago }}
            by
            <router-link :to="'/user/' + news.user">{{ news.user }}</router-link>
            <!-- {{ news.user }} -->
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
.sec{
  // background: #f6f6ef;
  padding: 5px 10px;
	.post-list {
    > li {
      padding: 2.5px 0;
      line-height: 1.5;
      .row-tit {
        .domain {margin-left: 5px;}
      }
      .domain,
      .row-cmt {
        font-size: 14px;
        color: $fg-gray;
      }
    }
  }
}
</style>
