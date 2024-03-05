<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    default: "mdi-rhombus-medium",
  },
  color: {
    type: String,
    default: "white",
  },
});
</script>

<template>
  <div data-git-path="src/components/IconDivider.vue">
    <div class="d-flex align-center justify-center w-100">
      <v-divider class="border-opacity-25" :color="props.color" />
      <v-icon
        :icon="props.icon"
        class="mx-4 opacity-50"
        :color="props.color"
        size="20"
      />
      <v-divider class="border-opacity-25" :color="props.color" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
