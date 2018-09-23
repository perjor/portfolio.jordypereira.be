<template>
  <div class="flex items-center justify-around">
    <div @click="previousProject()" role="button" class="h-85v flex items-center">
      <span class="text-orange-light hover:text-orange transition-1 tracking-wide hidden md:block">Previous Project</span>
      <span class="md:hidden text-4xl text-orange px-2">&#8592;</span>
    </div>

    <div class="animate" ref="project">
      <Project v-if="!loading" :project="this.currentProject" :currentImage="this.currentProject.images[0]" />
    </div>

    <div @click="nextProject()" role="button" class="h-85v flex items-center">
      <span class="text-orange-light hover:text-orange transition-1 tracking-wide hidden md:block">Next Project</span>
      <span class="md:hidden text-4xl text-orange text-orange px-2">&#8594;</span>
    </div>

  </div>
</template>

<script>
import Project from '@/components/Project.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    Project
  },
  data () {
    return {
      loading: true,
      projects: [],
      currentProject: null,
      projectsTotal: 0,
      projectCount: 1,
      fadeDuration: 300
    }
  },
  mounted () {
    axios.get('js/projects.json').then(response => {
      // console.log(response);
      this.projects = response.data
      this.currentProject = this.projects[0]
      this.projectsTotal = this.projects.length
      this.loading = false
    })
  },
  methods: {
    changeProject (index) {
      this.currentProject = this.projects[index - 1]
      this.projectCount = index
    },
    nextProject () {
      this.$refs.project.classList.add('fadeInRight')
      if (this.projectCount === this.projectsTotal) {
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
        this.projectCount = this.projectsTotal
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
.animate {
  animation-duration: 200ms;
  animation-fill-mode: both;
  transition: all 1000ms;
}

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
