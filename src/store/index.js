import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categorias: []
  },
  mutations: {
    setCategorias(state, arrayCategorias) {
      state.categorias = arrayCategorias
    }
  },
  actions: {
    loadCategorias(context) {
      api.categorias.getAll()
      .then((response) => context.commit('setCategorias', response.data))
      .catch((error) => alert(error))
    }
  },
  modules: {
  }
})
