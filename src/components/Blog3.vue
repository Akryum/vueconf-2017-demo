<template>
	<main>
		<h1>I Am Blog!</h1>

		<section v-if="loading" class="loading">Loading...</section>

		<section v-for="post of posts" :key="post.id" class="posts">
			<Post :title="post.title" :author="post.author.name"></Post>
		</section>
	</main>
</template>

<script>
import Post from './Post.vue'
import { use } from 'vue-supply'
import { mapGetters } from 'vuex'

export default {
	components: {
		Post,
	},

	// Declares that this component needs the 'Posts'
	// supply to be active
	mixins: [use('Posts')],

	// Vuex getters
	computed: mapGetters({
		posts: 'all-posts',
		loading: 'posts-loading',
	}),
}
</script>
