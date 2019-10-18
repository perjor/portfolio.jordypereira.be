<template>
  <div class="flex flex-col justify-between">
    <div class="w-full flex-1 hidden md:flex flex-row justify-center">
      <transition name="fade">
        <Slideshow v-if="this.$store.state.currentImage" />
      </transition>
      <Description v-if="project" :project="project" class="flex-auto transition-1 px-5" />
    </div>
    <Description v-if="project" :project="project" class="md:hidden" />
    <Thumbnails class="py-5" />
    <Slideshow v-if="this.$store.state.currentImage" class="md:hidden" />
  </div>
</template>

<script>
import Slideshow from '@/components/Slideshow'
import Thumbnails from '@/components/Thumbnails'
import Description from '@/components/Description'

export default {
  name: 'Project',
  components: {
    Slideshow,
    Thumbnails,
    Description
  },
  props: {
    project: Object
  }
}
</script>
