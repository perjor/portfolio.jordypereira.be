<template>
  <div class="flex
              flex-col
              justify-between">
    <div class="w-full hidden md:flex flex-row justify-center">
      <Slideshow v-if="this.$store.state.currentImage" />
      <Description v-if="this.$store.state.currentProject" />
    </div>
    <Description v-if="this.$store.state.currentProject" class="md:hidden" />
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
  }
}
</script>
