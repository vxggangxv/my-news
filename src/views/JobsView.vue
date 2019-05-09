<template>
  <section class="sec post">
		<h1 class="text-hide">뉴스 기사 리스트</h1>
    <!-- {{ this.$store.state.jobs }} -->
		<ul class="post-list">
			<li v-for="(item, index) in this.$store.state.jobs" :key="item.index">
        <div class="row-tit">
          {{ index + 1 }}.
          <a :href="item.url" target="_blank">{{ item.title }}</a>
          <template v-if="item.domain">
            <small class="domain">({{ item.domain }})</small>  
          </template>
        </div>
        <div class="row-cmt">
          <small class="">
            {{ item.time_ago }}
          </small>
        </div>
			</li>
		</ul>
  </section>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('FETCH_JOBS')
        .then(() =>  console.log('sucess'))
        .catch(() => console.log('fail'));
    }
  }
</script>

<style lang="scss" scoped>
  @import '../scss/listview.scss';
</style>