<script lang="ts" setup>
import { templateRef } from "@vueuse/core";
import anime, { AnimeInstance } from "animejs";
import { onMounted, ref, h } from "vue";

const props = defineProps({
  img: {
    default: "",
  },
  label: {
    default: "",
  },
});

const emit = defineEmits(["open", "close", "change"]);
const isExpanded = ref(false);
function onHoverChange(isOpen: boolean) {
  emit("change", isOpen);
  if (isOpen) {
    emit("open");
  } else {
    emit("close");
  }
}
</script>

<template>
  <div :class="{ 'z-index-1': isExpanded }">
    <v-hover
      #default="{ isHovering, props: hoverProps }"
      @update:model-value="onHoverChange"
      v-model="isExpanded"
      open-delay="700"
    >
      <div
        class="node-container"
        :class="{ 'node-expanded': isHovering }"
        v-ripple="true"
        v-bind="hoverProps"
      >
        <div class="skill-tree-node">
          <div class="d-flex align-center">
            <img :src="props.img" class="mr-1" />
            <h4>{{ props.label }}</h4>
          </div>
          <div class="node-content">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              dolorem quis dolor voluptatem excepturi eos nisi enim eius
              repellendus nihil.
            </div>
          </div>
        </div>
      </div>
    </v-hover>
  </div>
</template>

<style lang="scss" scoped>
$node-color: $secondary;
.node-container {
  width: fit-content;
  align-items: center;
  border-radius: 4px;
  transition:
    box-shadow 0.5s,
    transform 0.2s;
  box-shadow: 0 0 0px 0px transparent;
  position: relative;

  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &.node-expanded {
    box-shadow: 0 0 50px 5px transparentize($node-color, 0.8);
    .node-content {
      max-width: 500px;
      max-height: 400px;
    }
  }

  .node-content {
    overflow: hidden;
    transition: all 0.3s;
    max-width: 0;
    max-height: 0;
    & > * {
      min-width: 500px;
      max-width: 500px;
    }
  }

  .skill-tree-node {
    border-radius: inherit;
    padding: 8px 10px;
    border: 3px solid $node-color;
    background-color: mix($node-color, $background, 0.8);

    img {
      width: 30px;
      aspect-ratio: 1 / 1;
    }
  }
}

.z-index-1 {
  z-index: 1;
}
</style>
