<template>
  <section class="sec post">
    <h1 class="text-hide">뉴스 기사 리스트</h1>
		<ul class="post-list">
			<li v-for="ask in this.$store.state.ask" :key="ask.id">
        <div class="row-tit">
          <!-- {{ ask.title }} -->
          <router-link :to="'/item/' + ask.id">{{ ask.title }}</router-link>
        </div>
        <div class="row-cmt">
          <small class="">
            {{ ask.time_ago }} 
            by 
            <router-link :to="'/user/' + ask.user">{{ ask.user }}</router-link>
          </small>
        </div>
			</li>
		</ul>

    {{ this.$store.state.ask }}
  </section>
</template>

<script>
  import { fetchAsk } from '../api/index.js';

  export default {
    created() {
      // fetchAsk()
      //   .then(response => console.log(response))
      //   .catch(error => console.log(error));
      this.$store.dispatch('FETCH_ASK')
        .then(() => console.log('sucess'))
        .catch(() => console.log('fail'));
      
      // this.$store.dispatch('FETCH_ASK')
      //     .then(() => console.log('sucess'))
      //     .catch(() => console.log('fail'));
    }
  }
</script>

<style lang="scss" scoped>
.sec.post {
	.post-list {
    // background: #f6f6ef;
    padding: 5px 0;
    > li {
      padding: 2.5px 10px;
      line-height: 1.5;
      .row-tit {
        .domain {margin-left: 5px;}
      }
      .domain,
      .row-cmt {
        font-size: 14px;
        color: #999999;
      }
    }
  }
}
</style>