<script lang="ts" setup>
import { use$App } from "@/store/$app";

const $app = use$App();
</script>

<template>
  <div class="home-max-width mx-auto">
    <v-expand-transition>
      <div
        data-git-path="src/views/Home/TheDirectorProjectInsight.vue"
        v-if="$app.directorMode.isOn == true"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae
        mollitia velit voluptatibus nisi harum animi impedit atque enim!
        Voluptate, qui. Molestiae deleniti tenetur libero similique maiores
        totam quo expedita.
      </div>
    </v-expand-transition>
  </div>
</template>

<style lang="scss" scoped></style>
