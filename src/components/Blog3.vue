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

	mixins: [use('Posts')],

	computed: mapGetters({
		posts: 'all-posts',
		loading: 'posts-loading',
	}),
}
</script>
