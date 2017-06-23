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
import POSTS_QUERY from '../graphql/posts.gql'

export default {
	components: {
		Post,
	},

	data () {
		return {
			posts: [],
			loading: 0,
		}
	},

	// Fetch posts with apollo
	apollo: {
		posts: {
			query: POSTS_QUERY,
			// This will increment `loading` prop
			// when the query is loading
			// then will decrement it when it's done
			// So you should display loading message
			// when `loading` isn't equal to 0
			loadingKey: 'loading',
			// Short-polling
			pollInterval: 500,
		},
	},
}
</script>
