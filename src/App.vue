<script lang="ts">
import RouteViewFrame from "@/layouts/RouteViewFrame.vue";

export default {
  components: {
    RouteViewFrame,
  },
};
</script>

<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import "@/StyleSheets/BaseStyles.scss";
</style>
