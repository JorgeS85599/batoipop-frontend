import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categorias: [],
    tags: []
  },
  getters: {

    nomCategoryById: (state) => (id) => {
      const categoria = state.categorias.find((item) => item.id == id)
      if (categoria) return categoria.name
      return 'Desconocido'
    },

    descriptionCategoryById: (state) => (id) => {
      const categoria = state.categorias.find((item) => item.id == id)
      if (categoria) return categoria.desc
      return 'Desconocido'
    }

  },
  mutations: {
    setCategorias(state, arrayCategorias) {
      state.categorias = arrayCategorias
    },
    setTags(state, arrayTags) {
      state.tags = arrayTags
    }
  },
  actions: {
    loadCategorias(context) {
      api.categorias.getAll()
      .then((response) => context.commit('setCategorias', response.data))
      .catch((error) => alert(error))
    },
    loadTags(context) {
      api.tags.getAll()
      .then((response) => context.commit('setTags', response.data))
      .catch((error) => alert(error))
    }

  },
  modules: {
  }
})
