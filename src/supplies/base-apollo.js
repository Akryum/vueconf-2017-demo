import { Supply } from 'vue-supply'
import apolloProvider from '../apollo-provider'

export default {
  extends: Supply,
  // Provide the apollo provider
  // holding the apollo client
  apolloProvider,
  // Disable all observables & subscriptions
  // if the supply isn't active
  apollo: {
    $skipAll () {
      return !this.active
    },
  },
}
