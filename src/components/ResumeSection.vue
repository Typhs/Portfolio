<script lang="ts" setup>
const props = defineProps({
  sectionTitle: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="mb-8">
    <div class="section-title">{{ props.sectionTitle }}</div>

    <div>
      <slot name="default" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/StyleSheets/ResumeStyles.scss";

.section-title {
  @include heading;
  font-size: 24px;
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 4px;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: $cv-border-thickness;
    background-color: $cv-primary;
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: calc($cv-border-thickness / 2);
    height: 10px;
    border-radius: 2px;
    aspect-ratio: 1 /1;
    background-color: $cv-primary;
    transform: translateY(50%);
  }
}
</style>
