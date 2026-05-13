<script setup lang="ts">
import { onMounted } from "vue";
import appStartedScript from "@/functions/AppStartedScript";
import TheDirectorsModeOverlay from "@/views/Home/TheDirectorsModeOverlay.vue";
import { use$App } from "./store/$app";

onMounted(() => {
  appStartedScript();
});

const $app = use$App();
</script>

<template>
  <v-app>
    <v-main :contentEditable="$app.directorMode.allowEdit ? 'true' : 'false'">
      <router-view />
      <the-directors-mode-overlay />
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import "@/StyleSheets/GlobalStyles.scss";
</style>
