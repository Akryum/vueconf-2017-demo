import Base from './base-apollo'
import POSTS_QUERY from '../graphql/posts.gql'

export default {
	extends: Base,

	data () {
		return {
			posts: [],
		}
	},

	// Use vue-apollo options
	apollo: {
		posts: {
			query: POSTS_QUERY,
			// Every supply already has a `loading` property
			// to handle loading state
			loadingKey: 'loading',
			pollInterval: 500,
		},
	},
}
