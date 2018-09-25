<template>
  <div class="md:w-4/5 mt-5 flex flex-col-reverse md:flex-col justify-between">
    <div class="">
      <img v-if="currentImage" :src="`./img/projects/${imagefolder}/${currentImage}`" alt="Project Image" class="max-w-full">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      imageCount: 1
    }
  },
  computed:
    mapState({
      images: state => state.currentProject.images,
      imagefolder: state => state.currentProject.imagefolder,
      currentImage: state => state.currentImage
    })
}
</script>

<style>
</style>
