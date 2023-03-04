<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/StyleSheets/CustomBaseStyles.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c7c7c7;
}

html, body, #app{
  background-color: rgb(19, 19, 19) ;
}
</style>
