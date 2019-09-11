<template>
	<section class="sec post">
		<h1 class="text-hide">뉴스 기사 리스트</h1>
		<ul class="post-list">
			<li v-for="(item) in listPaginatedItems" :key="item.index">
				<div class="row-tit">
					<template v-if="item.no < 9">
						<span class="post-no">0{{ item.no + 1 }}.</span>
					</template>
					<template v-else>
						<span class="post-no">{{ item.no + 1 }}.</span>
					</template>
					<template v-if="item.title">
						<template v-if="item.domain">
							<a :href="item.url" target="_blank">{{ item.title }}</a>
							<small v-if="item.domain" class="domain">({{ item.domain }})</small>
						</template>
						<template v-else>
							<router-link :to="'/item/' + item.id" class="r-link">{{ item.title }}</router-link>
						</template>
					</template>
				</div>
				<div class="row-cmt">
					<small class="">
						{{ item.time_ago }}
						by
						<router-link v-if="item.user" :to="'/user/' + item.user" class="r-link">{{ item.user }}</router-link>
					</small>
				</div>
			</li>
		</ul>
		<div class="btn-cover">
			<button :disabled="pageNum === 0" type="button" class="prev btn btn-default xs" @click="prevPage"><i class="fas fa-chevron-left"></i></button>
			<!-- <a v-for="(item, index) in listPaginatedItems" :key="item.index" href="javascript:;">{{ index + 1 }}</a> -->
			<span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} page</span>
			<button :disabled="pageNum >= pageCount - 1" type="button" class="next btn btn-default xs" @click="nextPage"><i class="fas fa-chevron-right"></i></button>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				pageNum: 0,
				pageSize: 10,
			}
		},
		computed: {
			listItemsTmp() {
				return this.$store.getters.fetchedList;
			},
			listItems() {
				let listArray = [];
				listArray = this.$store.getters.fetchedList;
				for (let i = 0; i < listArray.length; i++) {
					listArray[i]['no'] = i;
				}
				return listArray;
			},
			pageCount() {
				let listLength = this.listItems.length,
					listSize = this.pageSize,
					page = Math.floor((listLength - 1) / listSize) + 1;
				
				return page;
			},
			listPaginatedItems() {
				const start = this.pageNum * this.pageSize,
					end = start + this.pageSize;

					return this.listItems.slice(start, end);
			}
			// listItems() {
			// 	if (this.$route.name === 'news') {
			// 		return this.$store.state.news;
			// 	} else if (this.$route.name == 'ask') {
			// 		return this.$store.state.ask;
			// 	} else if (this.$route.name == 'jobs') {
			// 		return this.$store.state.jobs;
			// 	}
			// }
		},
		methods: {
			nextPage() {
				this.pageNum += 1;
			},
			prevPage() {
				this.pageNum -= 1;
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import '@/scss/listview.scss';
</style>