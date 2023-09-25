<template>
  <div>
    <div class="parallax-container" ref="parallax-container">
      <div class="parallax-background parallax-layer" data-depth="0.10">
        <constellation-background
          class="h-100 expand-init pointer-events-all"
          :speedModifier="constellationSpeed"
        />
      </div>

      <div class="parallax-layer h-100" data-depth="0.40">
        <circle-header-v2
          class="center-middle expand-init pointer-events-all"
          v-model="circleRotatingAngle"
          @mousemove="speedUpConstellation()"
        />
      </div>

      <div class="bg-fade-wave parallax-layer" data-depth="0.1" />

      <div class="bg-back-buildings parallax-layer" data-depth="0.3" />

      <div class="bg-front-buildings parallax-layer" data-depth="0.5" />

      <div class="bg-railing-transition parallax-layer" data-depth="1" />
      <div class="layer-overlay parallax-layer" data-depth="0.85" />
    </div>

    <div class="after-parallax">
      <div style="min-height: 100vh">
        after
        {{ circleRotatingAngle }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ConstellationBackground from "@/views/ViewComponents/Home/ConstellationBackground.vue";
import CircleHeaderV2 from "@/views/ViewComponents/Home/CircleHeaderV2.vue";

import { onMounted, ref } from "vue";
import { templateRef } from "@vueuse/core";

// ========= Scroll Parallax =========
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  const parallaxContainer = templateRef<HTMLElement>("parallax-container");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: parallaxContainer.value,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.utils.toArray(".parallax-layer").forEach((layer: any) => {
    const depth = layer.dataset.depth;
    const movement = -(layer.offsetHeight * depth);
    tl.to(layer, { y: movement, ease: "none" }, 0);
  });
});
// ========= Scroll Parallax =========

const circleRotatingAngle = ref(0); // used in Styles v-bind

const speedTimeout = ref<undefined | ReturnType<typeof setTimeout>>(undefined);
const constellationSpeed = ref(1);

function speedUpConstellation() {
  clearTimeout(speedTimeout.value);
  constellationSpeed.value = 5;
  speedTimeout.value = setTimeout(() => {
    constellationSpeed.value = 1;
  }, 100);
}
</script>

<style lang="scss">
$parallaxHeight: 130vh;

$rotatingAngle: v-bind(circleRotatingAngle);

.parallax-container {
  height: $parallaxHeight;
  overflow: hidden;
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  z-index: 0;
}
.after-parallax {
  position: relative;
  background-color: #050309;
}
.parallax-layer {
  background-position: bottom center;
  background-size: auto;
  background-repeat: no-repeat;
  width: 100%;
  height: $parallaxHeight;
  position: fixed;
  pointer-events: none;
  z-index: -1;
}

.parallax-background {
  background-image: url("@/assets/heroHeader/header-background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  //filter: contrast(2);
}

.bg-fade-wave {
  background-image: url("@/assets/heroHeader/bg-fade-wave.png");
  background-position: left bottom;
  background-size: 100% auto;
}
.bg-back-buildings {
  background-image: url("@/assets/heroHeader/back-buildings-RESIZED.png");
  background-position: left bottom;
  background-size: 100% auto;
}
.bg-front-buildings {
  background-image: url("@/assets/heroHeader/front-buildings-RESIZED.png");
  background-position: bottom;
  background-size: 100% auto;
}
.bg-railing-transition {
  background-image: url("@/assets/heroHeader/transition-railing.png");
  background-position: right bottom;
  background-size: 100% auto;
}
.layer-overlay {
  //background-image: url("@/assets/header/BuildingsHeader-clouds.png");
  //background-color: red;
  background-position: bottom;
  background-size: cover;
  background-position: center;
  //opacity: 0.2;
  background-repeat: repeat;
  box-shadow: inset 0 0 calc(#{$rotatingAngle} * 10vw)
    calc(#{$rotatingAngle} * 10px) rgba(0, 0, 0, 0.5);

  //box-shadow:  inset 0 0 1000px black;
}
.pointer-events-all {
  pointer-events: all;
}

.center-middle {
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
