<script lang="ts" setup>
import { templateRef } from "@vueuse/core";
import { onMounted } from "vue";

const mouseFilterEl = templateRef<HTMLElement>("mouse-filter");
onMounted(() => {
  window.onmousemove = (evt) => {
    mouseFilterEl.value.style.left = evt.clientX + "px";
    mouseFilterEl.value.style.top = evt.clientY + "px";
  };
});
</script>

<template>
  <div>
    <div ref="mouse-filter" class="mouse-filter" />
  </div>
</template>

<style lang="scss" scoped>
.mouse-filter {
  aspect-ratio: 1 / 1;
  width: 400px;
  position: fixed;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 10;
  backdrop-filter: contrast(3);
  pointer-events: none;
  border: 3px solid $surface;
}
</style>
