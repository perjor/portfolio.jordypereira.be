<template>
  <div class="project shadow-lg">
    <div class="display">
      <div class="currentPicture">
        <img :src="`./img/projects/${project.imagefolder}/${currentImage.img}`" alt="Project Image" ref="image">
      </div>
      <div class="thumbnails">
        <thumbnails :images="this.project.images" :imagefolder="this.project.imagefolder" :current="this.currentImage" v-on:setCurrent="changeImage" />
      </div>
    </div>
    <div class="w-1/2 flex flex-col justify-between">
      <div class="flex flex-col items-center">
        <span class="text-orange font-semibold self-end mr-5">{{ project.category }}</span>
        <div class="px-4 py-2 w-2/3 my-5">
          <h1>{{ project.title }}</h1>
        </div>
        <div class="my-5">
          <p class="my-5" v-html="project.description">
          </p>
          <p class="flex flex-col">
            <a :href="project.github" target="_blank" rel="noopener">Github</a>
            <a :href="project.demo" target="_blank" rel="noopener">Demo</a>
          </p>
        </div>
      </div>
      <div class="links">
          TODO: links with the same category
      </div>
    </div>
    
  </div>
</template>

<script>
import Thumbnails from '@/components/Thumbnails';

export default {
  name: 'Project',
  components: {
    Thumbnails
  },
  data() {
    return {
      imageCount: 1,
      currentImage: null,
      project: {
        imagefolder: 'Reddut',
        img: 'front.png',
        title: 'Laravel blog app',
        description: 'A blog post app made in Laravel </br> A project made for school',
        github: 'https://github.com/perjor/Reddut',
        demo: 'http://reddut.jordypereira.be/',
        category: 'Back-end',
        images: [
          {
            img: 'front.png'
          },
          {
            img: 'post.png'
          },
          {
            img: 'editPost.png'
          }
        ]
      },
    }
  },
  created() {
    this.currentImage = this.project.images[0] 
  },
  computed: {
    imageTotal() {
      return this.project.images.length
    },
  },
  methods: {
    changeImage: function(index) {
      this.currentImage = this.project.images[index - 1];
      this.imageCount = index;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.project {
  width: 80vw;
  height: 85vh;

  display: flex;
  .display {
    max-width: 60%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .currentPicture img {
      max-width: 100%;
      max-height: 100%;
      transition: 1s;
    }
    .thumbnails {
      align-self: bottom;
      padding-bottom: 5px;
    }
  }
}
</style>
