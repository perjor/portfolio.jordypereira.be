<template>
  <div class="flex flex-col items-center md:mt-5">
    <div class="md:w-2/4 px-2">
      <h1 class="mt-5">{{ project.title }}</h1>
      <div class="text-orange w-full mt-3">
        <span class="font-semibold mr-5">{{ project.category }}</span>
        <ul class="list-reset inline">
          <li v-for="(tech, i) in project.tech" :key="i" class="inline pr-2 text-sm">{{ tech }}</li>
        </ul>
      </div>
      <p class="my-5 project-description" v-html="project.description"></p>
      <ul class="list-reset my-5 pt-5">
        <li v-for="(feature, i) in project.features" :key="i" class="mb-1">
          <span class="font-bold text-orange">+</span>
          {{ feature }}
        </li>
      </ul>
      <p class="pt-4">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener"
          class="link mt-1"
          @click="$ga.event('github', project.imageFolder)"
        >Github</a>
        <br />
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener"
          class="link"
          @click="$ga.event('demo', project.imageFolder)"
        >Demo / Website</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  }
}
</script>

<style>
.project-description {
  line-height: 1.5rem;
}
</style>
