<template>
  <section class="sec post">
		<h1 class="text-hide">뉴스 기사 리스트</h1>
		<ul class="post-list">
			<li v-for="(item, index) in listItems" :key="item.index">
        <div class="row-tit">
          {{ index + 1 }}.
					<template v-if="item.title">
						<template v-if="item.domain">
							<a :href="item.url" target="_blank">{{ item.title }}</a> 
							<small v-if="item.domain" class="domain">({{ item.domain }})</small>
						</template>
						<template v-else>
							<router-link :to="'/item/' + item.id">{{ item.title }}</router-link>
						</template>
					</template>
        </div>
        <div class="row-cmt">
          <small class="">
            {{ item.time_ago }}
            <router-link v-if="item.user" :to="'/user/' + item.user">by {{ item.user }}</router-link>
          </small>
        </div>
			</li>
		</ul>
  </section>
</template>

<script>
export default {
  computed: {
		listItems() {
			return this.$store.getters.fetchedList;
		},
		// listItems() {
		// 	if (this.$route.name === 'news') {
		// 		return this.$store.state.news;
		// 	} else if (this.$route.name == 'ask') {
		// 		return this.$store.state.ask;
		// 	} else if (this.$route.name == 'jobs') {
		// 		return this.$store.state.jobs;
		// 	}
		// }
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/listview.scss';
</style>
