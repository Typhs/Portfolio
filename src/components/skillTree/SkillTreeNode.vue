<script lang="ts" setup>
import { templateRef } from "@vueuse/core";
import anime, { AnimeInstance } from "animejs";
import { onMounted, ref, h, computed } from "vue";

const props = defineProps({
  img: {
    default: "",
  },
  label: {
    default: "",
  },
  size: {
    default: 1,
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
        <div class="skill-tree-node" :class="`skill-size-${props.size}`">
          <div class="node-title">
            <img :src="props.img" class="mr-1" />
            <span class="node-title-label">{{ props.label }}</span>
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
  border-radius: 8px;
  transition:
    box-shadow 0.5s,
    transform 0.2s;
  box-shadow: 0 0 0px 0px transparent;
  position: relative;

  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }

  .skill-tree-node {
    border-radius: inherit;
    padding: 0 5px;
    border: 3px solid $node-color;
    background-color: mix($node-color, $background, 0.8);

    &.skill-size-1 {
      font-size: 12px;
    }
    &.skill-size-2 {
      font-size: 15px;
    }
    &.skill-size-3 {
      font-size: 18px;
    }

    img {
      width: 1.5em;
      aspect-ratio: 1 / 1;
    }
  }

  .node-title {
    display: flex;
    align-items: center;
    transition: all 0.3s;
    background-color: inherit;
    width: fit-content;
    padding: 4px 2px;
    border-radius: inherit;
    border: 3px solid transparent;

    .node-title-label {
      font-size: 1.1em;
      font-weight: bold;
    }
  }

  .node-content {
    overflow: hidden;
    transition: all 0.3s;
    max-width: 0;
    max-height: 0;

    & > * {
      padding: 0 9px 10px 8px;
      min-width: 500px;
      max-width: 500px;
    }
  }

  &.node-expanded {
    box-shadow: 0 0 50px 5px transparentize($node-color, 0.8);
    .node-content {
      margin-top: -15px;
      max-width: 500px;
      max-height: 400px;
    }
    .node-title {
      transform: translateY(-50%);
      border-color: $node-color;
      margin-left: 10px;
      padding: 5px 10px;
    }
  }
}

.z-index-1 {
  z-index: 1;
}
</style>
