<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { templateRef } from "@vueuse/core";
import GhostlyTypewriter from "./GhostlyTypewriter.vue";

const threshholds = ref<number[]>([]);
for (let i = 0; i <= 1.0; i += 0.01) {
  threshholds.value.push(i);
}

const isAfter = ref(false);

const typewriterRefs = [
  templateRef<InstanceType<typeof GhostlyTypewriter>>("typewriter-1"),
  templateRef<InstanceType<typeof GhostlyTypewriter>>("typewriter-2"),
  templateRef<InstanceType<typeof GhostlyTypewriter>>("typewriter-3"),
];

const fullyVisible = ref(false);

function handleIntersect(
  isVisible: boolean,
  entries: IntersectionObserverEntry[],
) {
  const percentageVisible = entries[0].intersectionRatio * 100;
  // 0 -> not at all on screen
  // 100 -> completely visible on screen

  isAfter.value = entries[0].boundingClientRect.top > 0;
  fullyVisible.value = percentageVisible >= 90;
  typewrittersAnimate(fullyVisible.value);
}

function typewrittersAnimate(forward: boolean) {
  typewriterRefs.forEach((tRef) => {
    tRef.value.playAnimations(forward);
  });
}
onMounted(() => {
  typewrittersAnimate(false);
});
</script>

<template>
  <div
    class="position-relative w-fit-content mx-auto"
    align="center"
    v-intersect="{
      handler: handleIntersect,
      options: { threshold: threshholds },
    }"
  >
    <div class="contact-info-wrapper">
      <div class="contact-info-container text-h6">
        <h2 class="text-white">
          <ghostly-typewriter
            :paragraphs="['Contact info']"
            ref="typewriter-1"
            class="w-fit-content"
          />
        </h2>
        <div class="d-flex align-center my-3">
          <v-divider color="primary" thickness="1" class="border-opacity-75" />
          <v-icon class="mx-2" icon="mdi-phone" size="18" color="primary" />
          <v-divider color="primary" thickness="1" class="border-opacity-75" />
        </div>
        <div class="mb-4">
          <v-btn
            href="https://github.com/Typhs/"
            class="d-flex justify-center w-fit-content"
            color="primary"
            variant="text"
            size="large"
          >
            <div class="contact-icon" :class="{ 'opacity-0': !fullyVisible }">
              <v-icon icon="mdi-email" />
              <v-icon icon="mdi-arrow-right-thin" size="18" class="mx-1" />
            </div>
            <div class="text-indigo-lighten-3">
              <ghostly-typewriter
                :paragraphs="['bmtailan@gmail.com']"
                ref="typewriter-2"
              />
            </div>
          </v-btn>
        </div>

        <div>
          <v-btn
            href="https://github.com/Typhs/"
            class="d-flex justify-center w-fit-content"
            color="primary"
            variant="text"
            size="large"
          >
            <div class="contact-icon" :class="{ 'opacity-0': !fullyVisible }">
              <v-icon icon="mdi-github" />
              <v-icon icon="mdi-arrow-right-thin" size="18" class="mx-1" />
            </div>
            <div class="text-indigo-lighten-3">
              <ghostly-typewriter
                :paragraphs="['https://github.com/Typhs']"
                ref="typewriter-3"
              />
            </div>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$primary: #6857ff;

.contact-info-wrapper {
  padding: 100px 0;
  //outline: 2px solid red;
}
.contact-info-container {
  border: 2px solid $primary;
  padding: 30px;
  border-radius: 10px;
  background-color: transparentize($primary, 0.95);
}
.contact-icon {
  transition: opacity 2s;
  opacity: 1;
  &.opacity-0 {
    opacity: 0;
  }
}
</style>
