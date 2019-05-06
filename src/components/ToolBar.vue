<template>
	<header class="header">
		<div class="inner fixed">
			<h1 class="h-logo"><a href="/"><img src="../assets/logo.png" alt="logo" class="logo"></a></h1>
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
		position: relative;
		$z: 10;
		$ht: 50px;
		height: $ht;
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
		}
		.h-logo,
		.gnb {
			// vertical-align: middle;
		}
		.h-logo {
			// display: inline-block;
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