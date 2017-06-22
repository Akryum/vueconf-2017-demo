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

	apollo: {
		posts: {
			query: POSTS_QUERY,
			loadingKey: 'loading',
			pollInterval: 500,
		},
	},
}
</script>
