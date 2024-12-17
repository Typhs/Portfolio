<script lang="ts" setup>
import SkillTreeDataset from "@/enums/SkillTreeDataset";
import { templateRef } from "@vueuse/core";
import anime, { Animation, AnimeInstance } from "animejs";
import { computed, nextTick, onBeforeMount, onMounted, ref } from "vue";
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

onBeforeMount(buildSkillTree);
const skills = ref<SkillTreeItem[]>([]);
function buildSkillTree() {
  SkillTreeDataset.forEach((skill) => {
    const [path, finalCoords] = makeCoordsPath(skill.coords);
    skills.value.push({
      finalCoords: finalCoords,
      img: skill.img,
      path: path,
      label: skill.label,
      id: skill.id,
    });
  });
}

onMounted(setupAnimations);
const animationMap: { [k: string]: AnimeInstance } = {};
const containerEl = templateRef<HTMLElement>("container");
function setupAnimations() {
  skills.value.forEach((skill) => {
    const el = containerEl.value.querySelector(
      `path[data-path-id="${skill.id}"]`,
    );
    console.log(el);
    animationMap[skill.id] = anime({
      targets: el,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutQuad",
      duration: 1000,
      autoplay: false,
    });
  });
}

function onHoverSkill(id: string) {
  if (animationMap[id].reversed) {
    animationMap[id].reverse();
  }
  animationMap[id].play();
}
function onHoverOutSkill(id: string) {
  if (!animationMap[id].reversed) {
    animationMap[id].reverse();
  }
  animationMap[id].play();
}

const theme = useTheme();
</script>

<template>
  <div class="position-relative" ref="container">
    <svg
      width="100%"
      :viewBox="`00 00 ${viewBox.width} ${viewBox.height}`"
      xmlns="http://www.w3.org/2000/svg"
      :stroke="theme.current.value.colors.secondary"
      style="outline: 1px solid red"
      class="skill-tree-svg d-block"
    >
      <template v-for="skill in skills">
        <!-- pipe lines, always visible -->
        <path
          stroke-width="0.5"
          fill="none"
          stroke-linejoin="round"
          :d="skill.path"
        />
        <circle :cx="skill.finalCoords.x" :cy="skill.finalCoords.y" r="1" />
      </template>

      <template v-for="skill in skills">
        <!-- inner pipe lines, visible on hover of each skill -->
        <path
          stroke-width="0.5"
          fill="none"
          stroke="gold"
          stroke-linejoin="round"
          stroke-linecap="round"
          :d="skill.path"
          class="inner-path"
          :data-path-id="skill.id"
        />
      </template>

      <!-- circle in the middle of SVG -->
      <circle :cx="viewBox.width / 2" :cy="viewBox.height / 2" r="1.3" />
    </svg>

    <template v-for="skill in skills">
      <skill-tree-node
        :img="skill.img"
        :label="skill.label"
        class="node-position"
        :style="`left: ${(100 * skill.finalCoords.x) / viewBox.width}%; top: ${(100 * skill.finalCoords.y) / viewBox.height}%;`"
        @mouseenter="onHoverSkill(skill.id)"
        @mouseleave="onHoverOutSkill(skill.id)"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.skill-tree-svg {
  circle {
    stroke-width: 0.5px;
  }

  .inner-path {
    filter: drop-shadow(0px 0px 1.5px $secondary);
  }
}

.node-position {
  position: absolute;
  transform: translate(-50%, -50%);
}
</style>
