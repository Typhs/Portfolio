<script lang="ts" setup>
const props = defineProps({
  img: {
    default: "",
  },
});
</script>

<template>
  <v-avatar class="skill-tree-node rounded-lg" size="60">
    <v-img :src="props.img" class="" />
  </v-avatar>
</template>

<style lang="scss" scoped>
.skill-tree-node {
  outline: 5px solid $secondary;
  border: 1px solid $secondary;
  aspect-ratio: 1 /1;
  background-color: $secondary;
}
</style>
