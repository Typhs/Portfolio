<script lang="ts" setup>
import TheParallaxHeader from "@/views/Home/TheParallaxHeader.vue";
</script>

<template>
  <the-parallax-header>
    <div align="center" class="py-15">
      <h1 class="text-white">My name is Ty</h1>
      <p class="mb-15">and I'm a particularly clever Front-End Developer</p>

      <p>
        <v-chip color="warning">
          <v-icon icon="mdi-tools" class="mr-2" />
          This project is yet in construction
        </v-chip>
      </p>
      <div class="contact-info-wrapper">
        <contact-info />
      </div>

      <div>
        <about-me-tabs />
      </div>
      <br style="margin-bottom: 50vh" />
    </div>
  </the-parallax-header>
</template>

<style lang="scss" scoped>
.contact-info-wrapper {
  padding-top: 500px;
  padding-bottom: 200px;
  min-height: 100vh; // if it's any smaller it may reveal the moving layers of Parallax background
}
</style>
