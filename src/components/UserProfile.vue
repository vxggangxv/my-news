<template>
	<div class="user-profile">
		<div class="user-container">
			<i class="fas fa-user-circle"></i>
			<div class="user-desc">
				<slot name="userName"></slot>
				<router-link :to="'/user/' + userInfo.user">{{ userInfo.user }}</router-link>
				<p class="time">
					{{ userInfo.time_ago || 'Joined ' + userInfo.created + ',' }}
					<span v-if="userInfo.points">, {{ userInfo.points }} points</span>
					<slot name="userKarma"></slot>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	props: {
		userInfo: {
			type: Object,
		}
	},
	computed: {
		...mapGetters([
			// 'userContent', 'userQuestion', 'userName', 'userTimeAgo', 'contentPoints',
		]),
	},
}
</script>

<style lang="scss" scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 15px 0;
  line-height: 1.3;
  font-size: 13px;
  .fa-user-circle {
    margin-right: 10px;
    font-size: 30px;
    color: #FF6500;
  }
  .q-tit {
    margin-bottom: 10px;
  }
  .q-content {
    line-height: 1.3;
    word-break: keep-all;
  }
}
</style>