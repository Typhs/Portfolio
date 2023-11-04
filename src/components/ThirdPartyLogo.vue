<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps({
  from: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "30",
  },
});

const imgUrl = computed(() => {
  return `src/assets/thirdParty/${props.from}-logo.png`;
});
</script>

<template>
  <!-- using a custom class instead of 'd-inline' so that  
  it can be overwritten with 'd-block' in the parent component if needed -->
  <div class="display-inline-week">
    <v-avatar rounded="rounded" :size="size">
      <v-img :src="imgUrl" />
    </v-avatar>
  </div>
</template>

<style lang="scss" scoped>
.display-inline-week {
  display: inline;
}
</style>
