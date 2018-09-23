<template>
  <div class="flex items-center justify-around">
    <span class="">Previous Project</span>
    <Project />
    <span class="">Next Project</span>
  </div>
</template>

<script>
// @ is an alias to /src
import Project from '@/components/Project.vue'

export default {
  name: 'home',
  components: {
    Project
  }
}
</script>
