import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentImage: null,
    currentProject: null,
    projects: [],
    loading: false
  },
  mutations: {
    changeProject (state, project) {
      state.currentProject = project
      state.currentImage = null
    },
    changeImage (state, image) {
      state.currentImage = image
    },
    clearImage (state) {
      state.currentImage = null
    }
  },
  actions: {
    fetchProjects ({ state }) {
      state.loading = true
      axios.get('js/projects.json').then(response => {
        state.projects = response.data
        state.currentProject = state.projects[0]
        state.loading = false
      })
    }
  },
  getters: {
    projectsTotal: state => {
      return state.projects.length
    },
    imagesTotal: state => {
      return state.currentProject.images.length
    }
  }
})
