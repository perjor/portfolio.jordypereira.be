<template>
  <div class="md:w-4/5 mt-3 md:ml-3 flex justify-center align-center max-w-full max-h-full w-full h-full">
    <div>
      <img :src="`./img/projects/${imagefolder}/${currentImage}`" alt="Project Image" class="max-w-full max-h-full">
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
