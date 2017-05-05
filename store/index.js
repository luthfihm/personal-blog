/**
 * Created by luthfi on 26/04/17.
 */
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    categories: []
  },
  mutations: {
    addCategories (state, categories) {
      state.categories = categories
    }
  }
})

export default store
