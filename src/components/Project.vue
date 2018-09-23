<template>
  <div class="project shadow-lg w-80v md:h-85v flex flex-col-reverse md:flex-row">
    <div class="display md:w-4/5 mt-5 flex flex-col-reverse md:flex-col justify-between">
      <div class="currentPicture">
        <img v-if="currentImage" :src="`./img/projects/${project.imagefolder}/${currentImage.img}`" alt="Project Image" ref="image" class="max-w-full max-h-full">
      </div>
      <div class="pb-4">
        <thumbnails :images="this.project.images" :imagefolder="this.project.imagefolder" :current="this.currentImage" v-on:setCurrent="changeImage" />
      </div>
    </div>
    <div class="md:w-1/2 flex flex-col justify-between">
      <div class="flex flex-col items-center">
        <span class="text-orange font-semibold self-end mr-5">{{ project.category }}</span>
        <div class="px-4 py-2 md:w-2/3 my-5">
          <h1>{{ project.title }}</h1>
        </div>
        <div class="my-5 w-2/3">
          <p class="my-5" v-html="project.description">
          </p>
          <p class="flex flex-col">
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="text-orange-dark hover:text-orange no-underline mt-1">Github</a>
            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="text-orange-dark hover:text-orange no-underline mt-1">Demo</a>
          </p>
        </div>
      </div>
      <div class="links invisible md:visible text-orange-lighter italic">
          TODO: links with the same category
      </div>
    </div>
  </div>
</template>

<script>
import Thumbnails from '@/components/Thumbnails'

export default {
  name: 'Project',
  props: {
    project: Object,
    currentImage: Object
  },
  components: {
    Thumbnails
  },
  data () {
    return {
      imageCount: 1
    }
  },
  computed: {
    imageTotal () {
      return this.project.images.length
    }
  },
  methods: {
    changeImage (index) {
      this.currentImage = this.project.images[index - 1]
      this.imageCount = index
    }
  }
}
</script>
