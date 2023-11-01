<script setup lang="ts">
import { templateRef } from "@vueuse/core";
import { onMounted } from "vue";
import anime from "animejs";

const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "200px",
  },
  duration: {
    type: Number,
    default: 3500,
  },
});

const containerEl = templateRef<HTMLDivElement>("animtaion-container");
onMounted(() => {
  initAnimation();
});

function initAnimation() {
  const duration = props.duration;

  const elWidth = containerEl.value.offsetWidth;
  const elHeight = containerEl.value.offsetHeight;

  Array.from(containerEl.value.children).forEach((child) => {
    function animateElement(el: HTMLElement, hasInit: boolean) {
      const coordX = anime.random(0, elWidth);
      const colorDeviation = 30;
      const randColor = `rgba(
        ${104 + anime.random(-colorDeviation, colorDeviation)}, 
        ${87 + anime.random(-colorDeviation, colorDeviation)}, 
        ${255 + anime.random(-colorDeviation, colorDeviation)},
        ${anime.random(0.6, 1)}
      )`;

      let delay = 0;
      if (!hasInit) {
        delay = anime.random(0, duration);
      }

      anime({
        targets: el,
        left: [coordX, coordX + anime.random(-100, 100)],
        bottom: [-100, elHeight + anime.random(-(elHeight / 3), 0)],
        duration: duration + anime.random(-(duration / 4), duration / 4),
        easing: "easeOutQuad",
        complete: () => {
          animateElement(el, true);
        },
        color: randColor,
        scale: [anime.random(2, 5), 0],
        rotate: anime.random(-180, 180),
        opacity: [0.7, 1],
        delay: delay,
      });
    }
    animateElement(child as HTMLElement, false);
  });
}
</script>

<template>
  <div class="animation-container" ref="animtaion-container">
    <template v-for="i in 10">
      <v-icon icon="mdi-hexagon" />
      <v-icon icon="mdi-square-root" />
      <v-icon icon="mdi-xml" />
      <v-icon icon="mdi-xml" />
      <v-icon icon="mdi-code-braces" />
      <v-icon icon="mdi-qrcode" />
      <v-icon icon="mdi-code-tags" />
      <v-icon icon="mdi-database" />
      <v-icon icon="mdi-source-branch" />
      <v-icon icon="mdi-variable" />
      <v-icon icon="mdi-file-code-outline" />
      <v-icon icon="mdi-api" />
      <v-icon icon="mdi-console" />
      <v-icon icon="mdi-web" />
      <v-icon icon="mdi-cog" />
      <v-icon icon="mdi-atom" />
      <v-icon icon="mdi-flask" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
$width: v-bind("props.width");
$height: v-bind("props.height");

.animation-container {
  height: $height;
  width: $width;
  //////
  overflow: hidden;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(104, 87, 255, 0.1) 63%,
    rgba(104, 87, 255, 0.3) 100%
  );
  > * {
    position: absolute;
    color: $primary;
  }
}
</style>
