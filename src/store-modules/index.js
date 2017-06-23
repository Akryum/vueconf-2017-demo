export default {
	// Use a supply inside the store module
	supply: {
		// Dependecy injection
		use: ['Posts'],
		inject ({ Posts }) {
			// Use the supply instances there
			return {
				getters: {
					'all-posts': () => Posts.posts,
					'posts-loading': () => !Posts.ready,
				},
			}
		},
	},

	// Then you can use the getters in the outside
	getters: {
		'posts-count': (state, getters) => getters['all-posts'].length,
	},
}