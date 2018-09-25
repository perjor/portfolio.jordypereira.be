<template>
  <div id="app" class="bg-grey-lightest h-screen">
    <nav class="p-5 md:text-left">
      <a href="https://jordypereira.be" class="text-orange no-underline uppercase text-4xl">
        <span class="font-bold font-montserrat">Jordy</span>
        <span class="font-light font-open"> Pereira</span>
      </a>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
