<template>
	<header class="header">
		<div class="inner fixed">
			<h1 class="h-logo"><img src="../assets/logo.png" alt="logo" class="logo"></h1>
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
	export default {

	}
</script>

<style lang="scss" scoped>
	.header {
		$ht: 50px;
		height: $ht;
		background-color: #42b883;
		color: #fff;
		display: flex;
		align-items: center;
		&, .inner {
			box-sizing: border-box;
		}
		.inner {
			padding: 8px 10px 10px;
			height: $ht;
		}
		.h-logo,
		.gnb {
			vertical-align: middle;
		}
		.h-logo {
			display: inline-block;
			.logo {
				position: relative;
				margin-right: 20px;
				width: 30px;
				padding: 2px 4px;
				background: #fff;
				vertical-align: middle;
			}
		}
		.gnb {
			display: inline-block;
			.menu {
				> a {
					margin: 0 5px;
					&:active {
						color: #35495e;
					}
				}
			}
		}
	}
</style>