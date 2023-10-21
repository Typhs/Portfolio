<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { templateRef } from "@vueuse/core";
import GhostlyTypewriter from "./GhostlyTypewriter.vue";

const threshholds = ref<number[]>([]);
for (let i = 0; i <= 1.0; i += 0.01) {
  threshholds.value.push(i);
}

const elHeight = ref(0);
const isAfter = ref(false);

const typewriterRefs = [
  templateRef<InstanceType<typeof GhostlyTypewriter>>("typewriter-1"),
  templateRef<InstanceType<typeof GhostlyTypewriter>>("typewriter-2"),
  templateRef<InstanceType<typeof GhostlyTypewriter>>("typewriter-3"),
];

function handleIntersect(
  isVisible: boolean,
  entries: IntersectionObserverEntry[],
) {
  const percentageVisible = entries[0].intersectionRatio * 100;
  // 0 -> not at all on screen
  // 100 -> completely visible on screen

  elHeight.value = percentageVisible;
  isAfter.value = entries[0].boundingClientRect.top > 0;
  typewrittersAnimate(percentageVisible >= 100);
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
    <div class="contact-info-container text-h6">
      <h2 class="text-white mb-8">
        <ghostly-typewriter
          :paragraphs="['Contact Info']"
          ref="typewriter-1"
          class="w-fit-content"
        />
      </h2>

      <div class="mb-4">
        <a
          href="https://github.com/Typhs/"
          class="hover-underline pb-1 text-primary d-flex justify-center w-fit-content"
        >
          <div class="text-primary">
            <v-icon icon="mdi-email" />
            <v-icon icon="mdi-arrow-right-thin" size="18" class="mx-1" />
          </div>
          <div class="text-indigo-lighten-3">
            <ghostly-typewriter
              :paragraphs="['bmtailan@gmail.com']"
              ref="typewriter-2"
            />
          </div>
        </a>
      </div>

      <div>
        <a
          href="https://github.com/Typhs/"
          class="hover-underline pb-1 text-primary d-flex justify-center w-fit-content"
        >
          <div class="text-primary">
            <v-icon icon="mdi-github" />
            <v-icon icon="mdi-arrow-right-thin" size="18" class="mx-1" />
          </div>
          <div class="text-indigo-lighten-3">
            <ghostly-typewriter
              :paragraphs="['https://github.com/Typhs']"
              ref="typewriter-3"
            />
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="temporary-indicator" :style="`height: ${elHeight}%;`" />
</template>

<style lang="scss">
.temporary-indicator {
  transition: all 0.4s;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  background-color: white;
  color: #07050c;
}

.contact-info-container {
  border: 2px solid white;
  padding: 30px;
  border-radius: 10px;
}
</style>
