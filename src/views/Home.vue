<template>
  <div class="flex items-center justify-around">
    <div @click="previousProject()" role="button" class="h-85v w-full flex items-center justify-center text-orange hover:text-orange-light">
      <span class="text-4xl">&#8592;</span>
    </div>

    <div class="animate " ref="project">
      <Project v-if="!this.$store.state.loading"   class="bg-white shadow-lg w-80v md:h-85v" />
    </div>

    <div @click="nextProject()" role="button" class="h-85v w-full flex items-center justify-center text-orange hover:text-orange-light">
      <span class="text-4xl">&#8594;</span>
    </div>

  </div>
</template>

<script>
import Project from '@/components/Project.vue'

export default {
  name: 'home',
  components: {
    Project
  },
  data () {
    return {
      projectCount: 1,
      fadeDuration: 300
    }
  },
  mounted () {
    this.$store.dispatch('fetchProjects')
  },
  methods: {
    changeProject (index) {
      // this.currentProject = this.projects[index - 1]
      this.$store.commit('changeProject', this.$store.state.projects[index - 1])
      this.projectCount = index
    },
    nextProject () {
      this.$refs.project.classList.add('fadeInRight')
      if (this.projectCount === this.$store.getters.projectsTotal) {
        this.projectCount = 1
      } else {
        this.projectCount++
      }
      setTimeout(() => {
        this.$refs.project.classList.remove('fadeInRight')
      }, this.fadeDuration)
      this.changeProject(this.projectCount)
    },
    previousProject () {
      this.$refs.project.classList.add('fadeInLeft')

      if (this.projectCount === 1) {
        this.projectCount = this.$store.getters.projectsTotal
      } else {
        this.projectCount--
      }

      setTimeout(() => {
        this.$refs.project.classList.remove('fadeInLeft')
      }, this.fadeDuration)

      this.changeProject(this.projectCount)
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInLeft {
  animation-name: fadeInLeft;
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInRight {
  animation-name: fadeInRight;
}
</style>
