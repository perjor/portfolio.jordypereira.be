<template>
  <div class="t-container" v-if="!this.$store.state.loading && this.$store.state.currentProject" @click.self="clearImage()">
    <div class="s-thumbnails">
      <div class="s-thumbnail transition-1" v-for="(image, i) in images" :key="i" :style="{ backgroundImage: `url('../img/projects/${imagefolder}/${image}')`}" :class="isCurrent(image)" @click="changeImage(i+1)"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    isCurrent (image) {
      return this.current === image ? 'current' : ''
    },
    changeImage (index) {
      this.$store.commit('changeImage', this.images[index - 1])
      this.imageCount = index
    },
    clearImage () {
      this.$store.commit('clearImage')
    }
  },
  computed: mapState({
    images: state => state.currentProject.images,
    imagefolder: state => state.currentProject.imagefolder,
    current: state => state.currentImage
  })
}
</script>

<style lang="scss" scoped>
$break-medium: 720px;
$break-large: 980px;

.t-container {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  .s-thumbnails {
    display: flex;
    .s-thumbnail {
      height: 50px;
      width: 50px;
      @media screen and (min-width: $break-medium) {
        height: 100px;
        width: 100px;
      }
      border: 3px solid rgba(0, 0, 0, 0);
      flex: 1 1 auto;
      margin: 0 10px;
      background-size: cover;
      background-position: center;
      &:hover {
        cursor: pointer;
        border: 3px solid #ff5722;
      }
    }
    .current {
      border: 3px solid #ff5722;
    }
  }
}
</style>
