import Vue from 'vue'
import router from './router'
import apolloProvider from './apollo-provider'
import App from './components/App.vue'


new Vue({
	el: '#app',
	...App,
	router,
	// Inject the apollo provider
	apolloProvider,
})
