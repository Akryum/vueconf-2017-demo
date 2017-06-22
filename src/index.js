import Vue from 'vue'
import App from './components/App.vue'
import router from './router'
import apolloProvider from './apollo-provider'
import './supply'
import store, { supplyCache } from './store'

new Vue({
	el: '#app',
	render: h => h(App),
	router,
	// Inject the apollo provider
	apolloProvider,
	// Inject the store & the supply cache
	store,
	supplyCache,
})
