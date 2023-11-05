<script lang="ts" setup>
import TheParallaxHeader from "@/views/Home/TheParallaxHeader.vue";
</script>

<template>
  <the-parallax-header>
    <div align="center" class="py-15">
      <spacer height="100px" />
      <h1 class="text-white">My name is Tailan</h1>
      <p class="mb-10">and I'm a particularly clever Front-End Developer</p>

      <p>
        <v-chip color="warning">
          <v-icon icon="mdi-tools" class="mr-2" />
          This project is yet in construction
        </v-chip>
      </p>

      <spacer height="150px" />

      <div>
        <span class="text-h5">Hello and welcome!</span> <br />
        <span class="text-h6">This is my personal portfolio</span> <br />
        <v-btn
          href="https://github.com/Typhs/portfolio-v2"
          target="_blank"
          class="mt-5"
          color="secondary"
          variant="tonal"
        >
          <v-icon icon="custom:git" class="mr-2" />
          Source code
        </v-btn>
      </div>

      <!-- <div class="contact-info-wrapper">
        <contact-info />
      </div> -->

      <spacer height="250px" />
      <div>
        <about-me-tabs />
      </div>

      <spacer height="250px" />

      <div class="contact-info-wrapper">
        <div class="mb-5 text-secondary">
          If you ever need me, here's a contact card
        </div>
        <business-card />
      </div>
      <spacer height="200px" />

      <v-card max-width="550px" variant="text">
        <div class="text-h5">Thank you for coming by</div>
        <br />
        <div class="mb-5">
          Hopefully i was able to show off some of the cool stuff I can pull
        </div>

        The quickest way to get to me is through the email: <br />
        <span class="text-primary-accent font-weight-bold"
          >bmtailan@gmail.com</span
        >
      </v-card>

      <spacer height="50vh" />
    </div>
    <div>
      <bubbling-icons-animation height="500px" size="25" multiplier="6" />
    </div>
  </the-parallax-header>
</template>

<style lang="scss" scoped></style>
