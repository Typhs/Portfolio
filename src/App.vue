<script setup lang="ts">
import { onMounted } from "vue";
import appStartedScript from "@/functions/AppStartedScript";
import RouteViewFrame from "@/layouts/RouteViewFrame.vue";
import TheDirectorsModeOverlay from "@/views/Home/TheDirectorsModeOverlay.vue";

onMounted(() => {
  appStartedScript();
});
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
