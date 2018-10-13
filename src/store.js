import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentImage: null,
    currentProject: null,
    projects: [],
    loading: false,
    userTheme: null
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
      axios.get('js/projects.json').then((response) => {
        state.projects = response.data
        state.currentProject = state.projects[0]
        state.loading = false
      })
    },
    switchTheme ({ state, getters }) {
      state.userTheme = getters.reverseTheme
    }
  },
  getters: {
    projectsTotal: (state) => {
      return state.projects.length
    },
    imagesTotal: (state) => {
      if (state.currentProject) {
        return state.currentProject.images.length
      }
      return false
    },
    currentProjectImages: (state) => {
      if (state.currentProject) {
        return state.currentProject.images
      }
      return false
    },
    theme: (state) => {
      if (state.userTheme) return state.userTheme
      const d = new Date()
      const t = d.getHours()
      if (t >= 19 || t <= 6) return 'dark'
      return 'light'
    },
    reverseTheme: (state, getters) => {
      if (getters.theme === 'light') return 'dark'
      return 'light'
    }
  }
})
