import Vue from 'vue'
import Vuex from 'vuex'
import storeOptions from './store-modules'
import { injectSupply } from 'vue-supply'

Vue.use(Vuex)

// Will prevent supply duplicates
// between supplies created by the store
// and by the components
export const supplyCache = {}

// Inject the defined supplies
// into the store definition
const finalOptions = injectSupply(storeOptions, supplyCache)

const store = new Vuex.Store(finalOptions)

export default store
