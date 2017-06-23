<template>
	<main>
		<h1>I Am Blog!</h1>

		<section v-if="!$supply.Posts.ready" class="loading">Loading...</section>

		<section v-for="post of $supply.Posts.posts" :key="post.id" class="posts">
			<Post :title="post.title" :author="post.author.name"></Post>
		</section>
	</main>
</template>

<script>
import Post from './Post.vue'
import { use } from 'vue-supply'

export default {
	components: {
		Post,
	},

	// Declares that this component needs the 'Posts'
	// supply to be active
	mixins: [use('Posts')],
}
</script>
