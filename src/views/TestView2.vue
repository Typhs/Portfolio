<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { templateRef } from "@vueuse/core";
import anime from "animejs";

type Branch = {
  x: number;
  y: number;
  dir: number;
};

const canvasEl = templateRef<HTMLCanvasElement>("canvas");

const animationFrameRef = ref<
  ReturnType<typeof requestAnimationFrame> | undefined
>(undefined);
const branches = ref<Branch[]>([]);

function newBranch(x: number, y: number): Branch {
  return {
    x: x,
    y: y,
    dir: anime.random(0, 360),
  };
}

function initAnimation() {
  if (animationFrameRef.value != undefined) {
    cancelAnimationFrame(animationFrameRef.value);
  }

  const ctx = canvasEl.value.getContext("2d")!;
  const height = 1000;
  const width = 1000;

  ctx.clearRect(0, 0, width, height);

  canvasEl.value.height = height;
  canvasEl.value.width = width;
  ctx.fillStyle = "white";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;

  branches.value = [
    newBranch(width / 2, height / 2),
    newBranch(width / 2, height / 2),
    newBranch(width / 2, height / 2),
  ];

  function animate() {
    console.log("tic");
    branches.value.forEach((b, bIdx) => {
      const length = 3;
      const angleInRadians = b.dir * (Math.PI / 180); // Convert angle to radians

      const endX = b.x + length * Math.cos(angleInRadians);
      const endY = b.y + length * Math.sin(angleInRadians);

      ctx.beginPath();
      ctx.moveTo(b.x, b.y);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      branches.value[bIdx].x = endX;
      branches.value[bIdx].y = endY;

      if (anime.random(1, 60) == 1) {
        // CREATE NEW BRANCH
        branches.value.push(newBranch(endX, endY));
      }

      const isOutsideViewport =
        b.x < 0 || b.x > width || b.y < 0 || b.y > height;

      if (isOutsideViewport || anime.random(1, 60) == 1) {
        // KILL THIS BRANCH
        branches.value.splice(bIdx, 1);

        // ctx.beginPath();
        // ctx.fillStyle= "purple"
        // ctx.arc(endX, endY, 10, 0, Math.PI * 2);
        // ctx.fill();
      }
    });

    animationFrameRef.value = requestAnimationFrame(animate);
  }
  animate();
}

onMounted(() => {
  initAnimation();
});
</script>

<template>
  <div class="pa-15">
    <div align="center">
      <canvas class="canvas-el mb-5" ref="canvas" />
      <div class="mb-10">
        <v-btn color="secondary" icon size="large" @click="initAnimation()">
          <v-icon icon="mdi-play" />
        </v-btn>
      </div>
      <div>Live branches: {{ branches.length }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.canvas-el {
  outline: 2px solid $primary;
  border-radius: 10px;
  aspect-ratio: 1 / 1;
  width: 500px;
}
</style>
