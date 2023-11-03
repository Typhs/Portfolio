<script lang="ts" setup>
import TheParallaxHeader from "@/views/Home/TheParallaxHeader.vue";
</script>

<template>
  <the-parallax-header>
    <div align="center" class="py-15">
      <spacer height="100px" />
      <h1 class="text-white">My name is Ty</h1>
      <p class="mb-10">and I'm a particularly clever Front-End Developer</p>

      <p>
        <v-chip color="warning">
          <v-icon icon="mdi-tools" class="mr-2" />
          This project is yet in construction
        </v-chip>
      </p>

      <div class="contact-info-wrapper">
        <contact-info />
      </div>

      <spacer height="250px" />
      <div>
        <about-me-tabs />
      </div>

      <div class="contact-info-wrapper">
        <business-card />
      </div>

      <br style="margin-bottom: 50vh" />
    </div>
    <div>
      <bubbling-icons-animation height="500px" size="25" multiplier="7" />
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
