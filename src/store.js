import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpen: false,
    reviews: [],
    summaries: []
  },
  mutations: {
    addReview(state, review) {
      state.reviews.push(review);
    },

    addSummary (state, summary) {
      state.summaries.push(summary);
    },

    changeToggleMenu(state) {
      state.isOpen = !state.isOpen;
      console.log(this.state.isOpen)
    }
  },
  actions: {
    addReview({commit}, review) {
      commit('addReview', review)
    },

    addSummary({commit}, summary) {
      commit('addSummary', summary)
    },

    changeToggle({commit}) {
      commit('changeToggleMenu')
      console.log(this.state.isOpen)
    }
  },
  getters: {
    getReviews(state) {
      console.log(state.reviews)
      return state.reviews;
    },

    getSummary(state) {
      return state.summaries;
    }
  }
})
