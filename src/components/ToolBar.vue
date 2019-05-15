<template>
	<header class="header">
		<!-- <div class="inner fixed"> -->
		<div class="inner" :class="{ 'fixed': isFixed }" ref="appHeader">
			<h1 class="h-logo">
				<a href="/" class="logo"><logo/></a>
			</h1>
			<nav class="gnb">
				<h1 class="text-hide">GNB 메뉴</h1>
				<div class="menu">
					<!-- <a href="">News</a>
					<a href="">Ask</a>
					<a href="">Jobs</a> -->
					<router-link to="/news">News</router-link>
					<router-link to="/ask">Ask</router-link>
					<router-link to="/jobs">Jobs</router-link>
				</div>
			</nav>
		</div>
	</header>
</template>

<script>
import Logo from '@/assets/logo.svg';

export default {
  components: {
    Logo
  },
  data() {
    return {
      navHeight: 0,
      isFixed: false,
    }
  },
  methods: {
    checkHeight() {
      this.isFixed = window.scrollY > this.navHeight ? true : false;
    }
  },
	mounted() {
    this.navHeight = this.$refs.appHeader.offsetHeight;
		window.addEventListener('scroll', this.checkHeight);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.checkHeight);
	}
}
</script>

<style lang="scss" scoped>
.header {
	position: relative;
	$z: 10;
	$ht: 50px;
	height: $ht;
	overflow: hidden;
	color: #fff;
	&, .inner {
		z-index: $z;
		box-sizing: border-box;
	}
	.inner {
		display: flex;
		align-items: center;
		height: $ht;
		padding: 8px 10px 10px;
		background-color: #42b883;
		&.fixed {
			background-color: rgba(66, 184, 131, 0.95);
		}
	}
	.h-logo {
		a.logo {
			$wt: 30px;
			display: inline-block;
			position: relative;
			margin-right: 20px;
			width: $wt;
			height: $wt;
			vertical-align: middle;
		}
	}
	.gnb {
		display: inline-block;
		.menu {
			> a {
				margin: 0 10px;
				&:first-child {
					margin-left: 0;
				}
				&:active {
					color: #35495e;
				}
			}
		}
	}
}
</style>