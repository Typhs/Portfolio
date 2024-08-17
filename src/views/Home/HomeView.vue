<script lang="ts" setup>
import TheParallaxHeader from "@/views/Home/TheParallaxHeader.vue";
import ThePageEndToolset from "@/views/Home/ThePageEndToolset.vue";
import TheProjectInsights from "@/views/Home/TheProjectInsights.vue";
import { onMounted } from "vue";
import { templateRef } from "@vueuse/core";
import anime from "animejs";
import { use$App } from "@/store/$app";

const $app = use$App();
</script>

<template>
  <div ref="test">
    <the-parallax-header>
      <div align="center" class="py-15">
        <spacer height="100px" />

        <div>
          <h1 class="text-white mb-2">My name is Tailan</h1>
          <p>and I'm a clever Front-End Developer</p>
        </div>
        <icon-divider width="400px" color="secondary" class="my-5" />

        <div>
          <p class="mb-3">Welcome to my personal portfolio</p>
          <v-btn
            href="https://github.com/Typhs/portfolio-v2"
            target="_blank"
            color="secondary"
            variant="tonal"
          >
            <v-icon icon="custom:git" class="mr-2" />
            Source code
          </v-btn>
        </div>

        <spacer height="250px" />
        <div>
          <about-me-tabs />
        </div>

        <spacer height="200px" />
        <contact-info />
        <spacer height="200px" />

        <the-page-end-toolset />

        <spacer height="200px" />

        <v-card max-width="550px" variant="text">
          <div class="text-h5">Thank you for coming by</div>
          <br />
          <div class="mb-5">
            Hopefully I was able to show off some of the cool stuff I can pull
          </div>

          The quickest way to get to me is through the email: <br />
          <span class="text-primary-accent font-weight-bold">
            bmtailan@gmail.com
          </span>
        </v-card>
      </div>

      <spacer height="150px" />

      <the-project-insights />

      <spacer height="200px" />

      <div>
        <bubbling-icons-animation height="500px" size="25" multiplier="6" />
      </div>

      <the-mouse-filter v-if="false" />
      <!-- REVIEW mouse filter effect -->
    </the-parallax-header>
  </div>
</template>
