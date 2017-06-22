<template>
	<div>{{ count }} post(s)</div>
</template>

<script>
import { use } from 'vue-supply'

export default {
	mixins: [use('Posts')],

	computed: {
		count () {
			return this.$supply.Posts.posts.length
			// return this.$store.getters['posts-count']
		},
	},
}
</script>
