<script setup lang="ts">
import RouteViewFrame from "@/layouts/RouteViewFrame.vue";
import TheDirectorsModeOverlay from "@/views/Home/TheDirectorsModeOverlay.vue";
</script>

<template>
  <v-app>
    <v-main>
      <router-view />
      <the-directors-mode-overlay />
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import "@/StyleSheets/GlobalStyles.scss";
</style>
