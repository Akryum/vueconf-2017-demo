import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from './components/Blog2.vue'
import About from './components/About.vue'

Vue.use(VueRouter)

const routes = [
	{ path: '/', name: 'home', component: Blog },
	{ path: '/about', name: 'about', component: About },
]

const router = new VueRouter({
	routes,
	mode: 'history',
})

export default router
