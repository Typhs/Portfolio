<script lang="ts" setup>
import TheParallaxHeader from "@/views/Home/TheParallaxHeader.vue";
</script>

<template>
  <the-parallax-header>
    <div align="center" class="pt-15">
      <h1 class="text-white">My name is Ty</h1>
      <p class="mb-15">and I'm a particularly clever Front-End Developer</p>

      <p>
        <v-chip color="primary">
          <v-icon icon="mdi-tools" class="mr-2" />
          This project is yet in construction
        </v-chip>
      </p>
      <div class="padding-y-500px">
        <contact-info />
      </div>
    </div>
  </the-parallax-header>
</template>

<style lang="scss">
.padding-y-500px {
  padding-top: 500px;
  padding-bottom: 500px;
}
</style>
