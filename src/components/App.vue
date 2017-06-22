<template>
	<div class="app">
		<AppMenu></AppMenu>
		<router-view></router-view>
	</div>
</template>

<script>
import AppMenu from './AppMenu.vue'

export default {
	components: {
		AppMenu,
	},
}
</script>


<style lang="stylus" src="../style/app.stylus"></style>

