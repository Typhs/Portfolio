<script lang="ts" setup>
import SkillTreeDataset from "@/enums/SkillTreeDataset";
import { computed, onMounted, ref } from "vue";
import { useTheme } from "vuetify/lib/framework.mjs";
const viewBox = {
  width: 200,
  height: 100,
};

function makeCoordsPath(coordinates: string[]) {
  const coords = coordinates.map((c) => c.toLowerCase());
  const finalCoords = { x: viewBox.width / 2, y: viewBox.height / 2 };

  let path = `M ${viewBox.width / 2} ${viewBox.height / 2}`;
  coords.forEach((coord) => {
    let axis: "x" | "y" | undefined = undefined;
    if (coord.includes("x")) {
      path = path + " h ";
      axis = "x";
    } else if (coord.includes("y")) {
      path = path + " v ";
      axis = "y";
    }
    const num = parseFloat(coord.replaceAll("x", "").replaceAll("y", ""));
    path = path + num;
    finalCoords[axis!] = finalCoords[axis!] + num;
  });

  return [path, finalCoords] as const;
}

const skills = ref<SkillTreeItem[]>([]);
function buildSkillTree() {
  SkillTreeDataset.forEach((skill) => {
    const [path, finalCoords] = makeCoordsPath(skill.coords);
    skills.value.push({
      finalCoords: finalCoords,
      img: skill.img,
      path: path,
    });
  });
}
onMounted(buildSkillTree);

const theme = useTheme();
</script>

<template>
  <div class="position-relative">
    <svg
      width="100%"
      :viewBox="`00 00 ${viewBox.width} ${viewBox.height}`"
      xmlns="http://www.w3.org/2000/svg"
      :stroke="theme.current.value.colors.secondary"
      style="outline: 1px solid red"
      class="skill-tree-svg d-block"
    >
      <template v-for="skill in skills">
        <path
          stroke-width="0.8"
          fill="none"
          stroke-linejoin="round"
          :d="skill.path"
        />
        <circle :cx="skill.finalCoords.x" :cy="skill.finalCoords.y" r="1" />
      </template>
      <circle :cx="viewBox.width / 2" :cy="viewBox.height / 2" r="3" />
    </svg>
    <template v-for="skill in skills">
      <skill-tree-node
        :img="skill.img"
        class="node-position"
        :style="`left: ${(100 * skill.finalCoords.x) / viewBox.width}%; top: ${(100 * skill.finalCoords.y) / viewBox.height}%;`"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.skill-tree-svg {
  circle {
    stroke-width: 0.5px;
  }
}

.node-position {
  position: absolute;
  transform: translate(-50%, -50%);
}
</style>
