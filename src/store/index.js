import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categorias: [],
    tags: [],
    user: {},
    token: ""
  },
  getters: {

    nomCategoryById: (state) => (id) => {
      const categoria = state.categorias.find((item) => item.id == id)
      if (categoria) return categoria.name
      return ''
    },

    descriptionCategoryById: (state) => (id) => {
      const categoria = state.categorias.find((item) => item.id == id)
      if (categoria) return categoria.desc
      return ''
    },

    isAuthenticated: state => !!state.token,

  },
  mutations: {
    setCategorias(state, arrayCategorias) {
      state.categorias = arrayCategorias
    },
    setTags(state, arrayTags) {
      state.tags = arrayTags
    },
    loginUser(state, token) {
      state.token = token.token
      state.user = token.user
      localStorage.token = token.token
      localStorage.user = JSON.stringify(token.user)
    },
    logoutUser(state) {
      state.token = null
      localStorage.removeItem('token')
      state.user = {}
      localStorage.removeItem('user')
    },
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
    },
    async login(context, user) {

      try {
        let response = await api.usuarios.login(user)
        if (response.status == 200) {
          context.commit('loginUser', response.data)
          return response
        }
      } catch (error) {
        //alert(error.response.data.error)
        throw error.response.data.error
      }
    },

    logout(contex) {
      if (localStorage.token) {
        contex.commit('logoutUser')
        router.push('/home')
      }
    }
  },
  modules: {
  }
})
