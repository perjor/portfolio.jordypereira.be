<template>
  <div class="t-container">
    <div class="s-thumbnails">
      <div class="s-thumbnail" v-for="(image, i) in images" :key="i" :style="{ backgroundImage: `url('../img/projects/${imagefolder}/${image.img}')`}" :class="isCurrent(image)" @click="$emit('setCurrent',i+1)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'images': Array,
    'current': Object,
    'imagefolder': String
  },
  methods: {
    isCurrent(image) {
      return this.current === image ? 'current' : '';
    },
    setCurrent(imageIndex) {
      this.current = imageIndex;
    },
  },
};
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
      }
    }
    .current {
      border: 3px solid #ff5722;
    }
  }
}
</style>
