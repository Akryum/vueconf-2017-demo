import Base from './base-apollo'
import POSTS_QUERY from '../graphql/posts.gql'

export default {
	extends: Base,

	data () {
		return {
			posts: [],
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
