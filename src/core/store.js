import Vue from 'vue'
import Vuex from 'vuex'

import colors from '../mutations/colors'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    colors
  }
})

export default store
