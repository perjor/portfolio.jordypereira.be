<template>
  <div class="t-container justify-around px-2" v-if="!this.$store.state.loading && this.$store.state.currentProject" @click.self="clearImage()">
    <!-- <span class="self-center text-2xl text-orange-dark">Screenshots:</span> -->
    <div class="s-thumbnails">
      <div class="s-thumbnail" v-for="(image, i) in images" :key="i" :style="{ backgroundImage: `url('../img/projects/${imagefolder}/${image}')`}" :class="isCurrent(image)" @click="changeImage(i+1)"></div>
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
$orange: #ff5722;
$border-color: $orange;

.t-container {
  display: flex;
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
      border: 3px solid rgba(255, 87, 34, 0.4);
      flex: 1 1 auto;
      margin: 0 10px;
      background-size: cover;
      background-position: center;
      transition: border 0.5s;
      &:hover {
        cursor: pointer;
        border: 3px solid rgba(255, 87, 34, 0.8);
      }
    }
    .current {
      border: 3px solid $border-color;
    }
  }
}
</style>
