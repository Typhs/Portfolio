<script lang="ts" setup>
import SkillTreeDataset from "@/enums/SkillTreeDataset";
import { computed, onMounted, ref } from "vue";
import { useTheme } from "vuetify/lib/framework.mjs";
const viewBox = {
  width: 200,
  height: 100,
};

type Skill = {
  img: string;
  path: string;
  finalCoords: {
    x: number;
    y: number;
  };
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

const skills = ref<Skill[]>([]);
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
  <div>
    <svg
      width="100%"
      :viewBox="`00 00 ${viewBox.width} ${viewBox.height}`"
      xmlns="http://www.w3.org/2000/svg"
      :stroke="theme.current.value.colors.secondary"
      style="border: 1px solid red"
      class="skill-tree-svg"
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
    {{ skills }}

    <!-- <path d="M 50 50 v 5 h 5 v 10" fill="none" stroke-width="1" /> -->
    <!-- <path
          d="M 50 50 L 50 55 L 55 55 L 55 60"
          fill="none"
          stroke="white"
          stroke-width="2"
        /> -->

    <!-- <path d="M 0 0 L 0 5 L 5 5 L 5 10" fill="none" stroke-width="1" /> -->
    <!--
      <svg width="50" height="100" viewBox="0 0 5 10" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 0 L 0 5 L 5 5 L 5 10" fill="none" stroke="white" stroke-width="0.5"/>
    </svg> -->
  </div>
</template>

<style lang="scss" scoped>
.skill-tree-svg {
  circle {
    stroke-width: 0.5px;
  }
}
</style>
