<script lang="ts" setup>
import { use$App } from "@/store/$app";
import { computed, onMounted } from "vue";

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});

const fileName = computed(() => {
  return props.path.split("/").pop()!;
});

const $app = use$App();

onMounted(() => {});
</script>

<template>
  <div>
    <div class="px-3">
      <h4 class="component-title">
        {{ fileName }}
        <v-btn
          variant="tonal"
          color="black"
          class="ml-2"
          icon
          size="22"
          density="comfortable"
          @click="$app.unselectCodePath()"
        >
          <v-icon icon="mdi-close" size="15" />
        </v-btn>
      </h4>
      <code-viewer language="vue" class="component-code" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$container-color: mix($secondary, $black, 0.2);
$container-radius: 8px;

.component-title {
  position: relative;
  color: $black;
  background-color: $container-color;
  width: fit-content;
  padding: 2px 8px 0 8px;
  border-radius: $container-radius;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  font-family: monospace;
  font-weight: 600;
  font-size: 18px;
  z-index: 1;
}
.component-code {
  border-radius: $container-radius;
  border-top-left-radius: 0;
  border: 2px solid $container-color;
  box-shadow: 0 0 15px transparentize($black, 0.6);
}
</style>
