<template>
  <div id="app" class="min-h-screen transition-05" :class="themeBackground">
    <nav class="p-5 flex justify-between">
      <a
        href="https://jordypereira.be"
        class="text-orange no-underline uppercase text-4xl"
      >
        <span class="font-bold font-montserrat">Jordy</span>
        <span class="font-light font-open"> Pereira</span>
      </a>
      <button
        @click="$store.dispatch('switchTheme')"
        class="text-orange-light hover:text-orange focus:outline-none transition-05 capitalize font-medium"
      >
        Enable {{ this.$store.getters.reverseTheme }} Theme
      </button>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  data () {
    return {
      lightColor: 'bg-grey-lightest',
      darkColor: 'bg-black'
    }
  },
  computed: {
    themeBackground () {
      let theme = this.lightColor
      if (this.$store.getters.theme === 'dark') theme = this.darkColor
      return theme
    }
  }
}
</script>

<style lang="scss">
html {
  background: #ff6666;
}
.animate {
  animation-duration: 200ms;
  animation-fill-mode: both;
  transition: all 1000ms;
}

::selection {
  background: #becbd8;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.font-montserrat {
  font-family: Montserrat;
}
.font-open {
  font-family: "Open Sans";
}
.transition-1 {
  transition: 1s;
}
.transition-05 {
  transition: 0.5s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.link {
  @apply text-orange-dark no-underline;

  &:hover {
    @apply text-orange;
  }
}
</style>
