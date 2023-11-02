<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  height: {
    type: String,
    default: "100px",
  },
});
</script>

<template>
  <div class="divider-element"></div>
</template>

<style lang="scss" scoped>
$spacer-height: v-bind("props.height");
.divider-element {
  height: calc($spacer-height);
}
</style>
