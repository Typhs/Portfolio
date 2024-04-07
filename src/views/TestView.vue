<script lang="ts" setup>
import anime from "animejs";
import { templateRef } from "@vueuse/core";
import { onMounted } from "vue";

const cloudContainerEl = templateRef<HTMLElement>("cloud-container");

onMounted(() => {
  animationInit();
});

function animationInit() {
  anime({
    targets: cloudContainerEl.value.querySelectorAll(".bubble-unit"),
    translateX: () => anime.random(-80, 80),
    translateY: () => anime.random(-20, 20),
    width: () => anime.random(60, 100),
    duration: 0,
  });
}
</script>

<template>
  <div class="pa-15">
    <v-btn @click="animationInit()" color="yellow">re-run</v-btn> <br /><br />
    <div
      class="cloud-container"
      ref="cloud-container"
      style="outline: 1px solid cyan"
    >
      <div class="cloud-bubbles">
        <div class="bubble-unit" v-for="i in 6" />
      </div>
      <div class="bubble-title">gamer time!</div>
    </div>
    <br /><br /><br /><br /><br />

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
    possimus sequi illum itaque inventore quae, quis porro autem amet ipsum!

    <commentary-bubble />
  </div>
</template>

<style lang="scss" scoped>
$cloud-color: $secondary;
.cloud-container {
  height: 150px;
  width: 200px;
  position: relative;

  .cloud-bubbles {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .bubble-unit {
      border-radius: 50%;
      background-color: $cloud-color;
      aspect-ratio: 1 / 1;
      position: absolute;
    }
  }

  .bubble-title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 25px;
    font-weight: bolder;
    padding: 15px 20px;
    background-color: $cloud-color;
    border-radius: 50%;
  }
}
</style>
