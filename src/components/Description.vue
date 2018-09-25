<template>
  <div class="flex flex-col items-center">
    <div class="text-orange  w-full flex flex-row justify-between mt-3">
      <ul class="list-reset flex flex-row flex-wrap w-2/3">
        <li v-for="(tech, i) in project.tech" :key="i" class="inline px-2 text-sm">{{ tech }}</li>
      </ul>
      <span class="font-semibold mr-5">{{ project.category }}</span>
    </div>
    <div class="px-4 py-2 md:w-2/3 mt-5">
      <h1 class="text-center">{{ project.title }}</h1>
    </div>
    <div class=" w-2/3">
      <p class="my-5 pb-5 text-center" v-html="project.description">
      </p>
      <ul class="list-reset my-5 pt-5">
        <li v-for="(feature, i) in project.features" :key="i" class="mb-1"> <span class="font-bold text-orange">+ </span>{{ feature }}</li>
      </ul>
      <p class="mt-3">
        <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="text-orange-dark hover:text-orange no-underline mt-1">Github</a> <br>
        <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="text-orange-dark hover:text-orange no-underline">Demo / Website</a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    project: state => state.currentProject
  })
}
</script>

<style>
</style>
