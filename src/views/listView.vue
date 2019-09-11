<template>
	<div class="cont list">
		<list-item></list-item>
	</div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
	components: {
		ListItem,
	},
	// created() {
	// 	this.$emit('on:progress');
	// 	this.$store.dispatch('FETCH_LIST', this.$route.name)
	// 		.them(() => this.$emit('off:progress'))
	// 		.catch(() => console.log('fail'));
	// }
}
</script>

<style lang="scss" scoped>
@import '@/scss/listview.scss';
</style>