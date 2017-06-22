import Vue from 'vue'
import VueSupply, { register } from 'vue-supply'
import Posts from './supplies/posts'

Vue.use(VueSupply)

register('Posts', Posts)
