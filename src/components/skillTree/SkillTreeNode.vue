<script lang="ts" setup>
const props = defineProps({
  img: {
    default: "",
  },
});
</script>

<template>
  <div>
    <div class="node-container">
      <div class="skill-tree-node">
        <img :src="props.img" class="mr-2" />
        <h4>sd sad</h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$node-color: $secondary;
.node-container {
  width: fit-content;
  align-items: center;
  border-radius: 10px;

  .skill-tree-node {
    border-radius: inherit;
    padding: 8px 10px;
    border: 5px solid $node-color;
    background-color: mix($node-color, $background, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 30px;
      aspect-ratio: 1 / 1;
    }
  }
  transition:
    box-shadow 0.8s,
    transform 0.2s;
  box-shadow: 0 0 0px 0px transparent;

  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 50px 5px transparentize($node-color, 0.8);
  }
}
</style>
