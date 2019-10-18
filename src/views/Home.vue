<template>
  <div>
    <div class="m-8" :class="themeText">
      Filter:
      <span
        v-for="filter in filters"
        :key="filter"
        @click="filter === currentFilter ? currentFilter = '' : currentFilter = filter"
        class="cursor-pointer"
        :class="{ 'text-orange': filter === currentFilter}"
      >{{ filter }}&nbsp;</span>
    </div>
    <div class="flex flex-wrap justify-around">
      <div
        v-for="(project, index) in filteredProjects"
        :key="project.title"
        class="w-32 h-32 m-auto shadow-md flex flex-col justify-between items-center p-4 rounded cursor-pointer max-w-1024"
        :class="themeBackground"
        @click="selectProject(index)"
      >
        <p class="text-lg text-center">{{ project.title }}</p>
        <p class="text-orange">{{ project.category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Project from '@/components/Project.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Project
  },
  data () {
    return {
      projectCount: 1,
      fadeDuration: 300,
      lightColor: 'white',
      darkColor: 'orange-lightest',
      filters: ['Cats', 'Vue', 'React', 'Nuxt', 'PHP', 'Python'],
      currentFilter: ''
    }
  },
  computed: {
    themeBackground () {
      let theme = this.lightColor
      if (this.$store.getters.theme === 'dark') theme = this.darkColor
      return 'bg-' + theme
    },
    themeText () {
      let theme = 'black'
      if (this.$store.getters.theme === 'dark') theme = this.lightColor
      return 'text-' + theme
    },
    ...mapState(['projects']),
    filteredProjects () {
      const projects = this.projects
      projects.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

      return this.currentFilter ? projects.filter(({ tech }) => {
        return tech.includes(this.currentFilter)
      }) : projects
    }
  },
  methods: {
    selectProject (index) {
      this.$store.commit('changeProject', this.$store.state.projects[index])
      this.$router.push({ name: 'projects', params: { projectIndex: index + 1 } })
    }
  }
}
</script>

<style scoped>
.max-w-1024 {
  max-width: 1024px;
}
</style>