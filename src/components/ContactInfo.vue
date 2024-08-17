<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { templateRef } from "@vueuse/core";
import GhostlyTypewriter from "@/components/GhostlyTypewriter.vue";

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

function onHoverChange(isHovered: boolean) {
  fullyVisible.value = isHovered;
  typewrittersAnimate(isHovered);
}

function typewrittersAnimate(forward: boolean) {
  typewriterRefs.forEach((tRef) => {
    tRef.value.playAnimations(forward);
  });
}

onMounted(() => {
  typewrittersAnimate(false);
  typewriterRefs.forEach((tRef) => {
    tRef.value.pauseAnimations();
  });
});
</script>

<template>
  <div
    data-git-path="src/components/ContactInfo.vue"
    class="position-relative w-fit-content mx-auto"
    align="center"
    @mouseenter="onHoverChange(true)"
    @mouseleave="onHoverChange(false)"
  >
    <div
      class="contact-info-wrapper px-5"
      :class="{ 'fully-visible': fullyVisible }"
    >
      <div class="hover-indicator">
        <v-chip color="primary" size="large">
          <v-icon icon="mdi-cursor-default-click" start />
          Hover me
        </v-chip>
      </div>
      <div class="contact-info-container text-h6 pa-5">
        <h2 class="text-white mt-1">
          <ghostly-typewriter
            :paragraphs="['Contact info']"
            ref="typewriter-1"
            class="w-fit-content"
          />
        </h2>
        <div class="d-flex align-center my-4 contact-info-divider">
          <v-divider color="primary" thickness="1" class="border-opacity-50" />
          <v-avatar variant="outlined" color="primary" size="40">
            <v-icon class="mx-2" icon="mdi-phone" size="18" color="primary" />
          </v-avatar>
          <v-divider color="primary" thickness="1" class="border-opacity-50" />
        </div>
        <div class="mb-4">
          <v-btn
            href="mailto:bmtailan@gmail.com"
            class="d-flex justify-center w-fit-content"
            color="primary"
            variant="plain"
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
            variant="plain"
            size="large"
          >
            <div class="contact-icon" :class="{ 'opacity-0': !fullyVisible }">
              <v-icon icon="custom:git" />
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

<style lang="scss" scoped>
.contact-info-wrapper {
  padding: 100px 0;
  position: relative;
  //outline: 2px solid red;

  &.fully-visible {
    .hover-indicator {
      opacity: 0;
      transition: all 0.2s ease-out;
    }
  }
  .hover-indicator {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: all 0.5s ease-in 4s;
  }
}
.contact-info-container {
  transition: border 5s;
  border-radius: 10px;
  border: 1px solid transparentize($primary, 1);
}
.contact-info-divider {
  opacity: 0;
  transition: opacity 1s;
}

.fully-visible {
  .contact-info-container {
    border-color: transparentize($primary, 0.7);
  }
  .contact-info-divider {
    opacity: 01;
  }
}

.contact-icon {
  transition: opacity 2s;
  opacity: 1;
  &.opacity-0 {
    opacity: 0;
  }
}
</style>
