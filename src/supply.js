import Vue from 'vue'
import VueSupply, { register } from 'vue-supply'
import Posts from './supplies/posts'

Vue.use(VueSupply)

// Register a supply definition
// vue-supply will take care of
// creating the supply instances
register('Posts', Posts)
