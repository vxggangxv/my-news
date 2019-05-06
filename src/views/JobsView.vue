<template>
  <section class="sec post">
		<h1 class="text-hide">뉴스 기사 리스트</h1>
    <!-- {{ this.$store.state.jobs }} -->
		<ul class="post-list">
			<li v-for="job in this.$store.state.jobs" :key="job.id">
        <div class="row-tit">
          <a :href="job.url">{{ job.title }}</a> <small class="domain">({{ job.domain }})</small>
        </div>
        <div class="row-cmt">
          <small class="">
            {{ job.time_ago }}
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
.sec.post {
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