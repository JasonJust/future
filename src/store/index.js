import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuType: 'top',
    elasticType: true,
    themeType: 'default',
    user: {}
  },
  getters: {
  },
  mutations: {
    setUserMessage: (state, data) => {
      state.user = data
    },
    setMenuType: (state, name) => {
      state.menuType = name
    },
    setElasticType: (state, elastic) => {
      state.elasticType = elastic
    },
    setThemeType: (state, theme) => {
      state.themeType = theme
    }
  },
  actions: {
  },
  modules: {
  }
})
