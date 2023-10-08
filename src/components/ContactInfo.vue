<script lang="ts" setup>
import { ref } from "vue";
import Components from "unplugin-vue-components/vite";

const threshholds = ref<number[]>([]);
for (let i = 0; i <= 1.0; i += 0.01) {
  threshholds.value.push(i);
}

const elHeight = ref(0);
const isAfter = ref(false);

function handleIntersect(
  isVisible: boolean,
  entries: IntersectionObserverEntry[],
) {
  elHeight.value = entries[0].intersectionRatio * 100;
  isAfter.value = entries[0].boundingClientRect.top > 0;
}
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
      <h2 class="text-white mb-8">Contact info</h2>

      <div class="mb-4">
        <a
          href="https://github.com/Typhs/"
          class="hover-underline pb-2 text-primary"
        >
          <span class="text-primary">
            <v-icon icon="mdi-email" />
            <v-icon icon="mdi-arrow-right-thin" size="18" class="mx-1" />
          </span>
          <span class="text-indigo-lighten-3">bmtailan@gmail.com</span>
        </a>
      </div>

      <div>
        <a
          href="https://github.com/Typhs/"
          class="hover-underline pb-2 text-primary"
        >
          <span class="text-primary">
            <v-icon icon="mdi-github" />
            <v-icon icon="mdi-arrow-right-thin" size="18" class="mx-1" />
          </span>
          <span class="text-indigo-lighten-3">https://github.com/Typhs</span></a
        >
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
}
</style>
