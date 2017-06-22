export default {
	supply: {
		use: ['Posts'],
		inject ({ Posts }) {
			return {
				getters: {
					'all-posts': () => Posts.posts,
					'posts-loading': () => !Posts.ready,
				},
			}
		},
	},

	getters: {
		'posts-count': (state, getters) => getters['all-posts'].length,
	},
}