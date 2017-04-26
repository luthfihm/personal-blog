/**
 * Created by luthfi on 26/04/17.
 */
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    resetData (state) {
      state = {
        posts: []
      }
    },
    setPosts (state, posts) {
      state.posts = posts
    }
  }
})

export default store
