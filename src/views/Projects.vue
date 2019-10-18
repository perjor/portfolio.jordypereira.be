<template>
  <div class="flex items-center justify-around">
    <div
      @click="previousProject()"
      role="button"
      class="h-85v w-full flex items-center justify-center text-orange hover:text-orange-light"
    >
      <span class="text-4xl">&#8592;</span>
    </div>

    <div class="animate" ref="project">
      <Project
        v-if="!this.$store.state.loading"
        class="shadow-lg w-80v md:h-85v"
        :class="themeBackground"
        :project="project"
      />
    </div>

    <div
      @click="nextProject()"
      role="button"
      class="h-85v w-full flex items-center justify-center text-orange hover:text-orange-light"
    >
      <span class="text-4xl">&#8594;</span>
    </div>
  </div>
</template>

<script>
import Project from '@/components/Project.vue'
import { mapState } from 'vuex'

export default {
  name: 'Projects',
  components: {
    Project
  },
  props: {
    projectIndex: Number
  },
  data () {
    return {
      projectCount: this.projectIndex || 1,
      fadeDuration: 300,
      lightColor: 'bg-white',
      darkColor: 'bg-orange-lightest'
    }
  },
  computed: {
    themeBackground () {
      let theme = this.lightColor
      if (this.$store.getters.theme === 'dark') theme = this.darkColor
      return theme
    },
    ...mapState({
      project: state => state.currentProject
    })
  },
  methods: {
    changeProject (index) {
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
