<script lang="ts" setup>
const props = defineProps({
  height: {
    type: String,
    default: "100px",
  },
  heightTransition: {
    type: String,
    default: "0s",
  },
});
</script>

<template>
  <div class="divider-element"></div>
</template>

<style lang="scss" scoped>
$spacer-height: v-bind("props.height");
$height-transition: v-bind("props.heightTransition");

.divider-element {
  height: calc($spacer-height);
  transition: height $height-transition;
}
</style>
