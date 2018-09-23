<template>
  <div id="app">
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
.font-montserrat {
  font-family: Montserrat;
}
.font-open {
  font-family: "Open Sans";
}
</style>
