<template>
	<div class="app">
		<AppMenu></AppMenu>

		<section v-if="enableCounter" class="counter">
			<label>
				<input type="checkbox" v-model="showCounter"></input>
				Show counter
			</label>
			
			<BlogCounter v-if="showCounter"></BlogCounter>
		</section>

		<router-view></router-view>
	</div>
</template>

<script>
import AppMenu from './AppMenu.vue'
import BlogCounter from './BlogCounter.vue'

export default {
	components: {
		AppMenu,
		BlogCounter,
	},

	data () {
		return {
			enableCounter: true,
			showCounter: false,
		}
	},
}
</script>


<style lang="stylus" src="../style/app.stylus"></style>

