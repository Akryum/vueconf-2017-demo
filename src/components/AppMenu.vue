<template>
	<nav class="app-menu">
		<router-link class="link" :to="{ name: 'home' }" exact>Home</router-link>
		<router-link class="link" :to="{ name: 'about' }">About</router-link>
	</nav>
</template>

<style lang="stylus" scoped>
.app-menu {
	text-align: center;
	background: rgba(black, .04);
}

.link {
	text-decoration: none;
	color: #47b784;
	display: inline-block;
	padding: 12px;
	border-bottom: solid 2px transparent;

	&.router-link-active {
		border-bottom-color: #47b784;
	}
}
</style>
