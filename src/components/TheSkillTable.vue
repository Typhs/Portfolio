<script lang="ts" setup>
import { templateRef } from "@vueuse/core";
import { onMounted } from "vue";
import anime from "animejs";

const technologiesContent = [
  {
    label: "CSS",
    logo: "css",
    percentage: "95",
    color: "#204be4",
  },
  {
    label: "JAVASCRIPT",
    logo: "javascript",
    percentage: "94",
    color: "#f0dc4e",
  },
  {
    label: "VUE",
    logo: "vue",
    percentage: "92",
    color: "#40b782",
  },
  {
    label: "TYPESCRIPT",
    logo: "typescript",
    percentage: "75",
    color: "#2d79c7",
  },
  {
    label: "PYTHON",
    logo: "python",
    percentage: "60",
    color: "#fec32c",
  },
];

const skillBarEl = templateRef<HTMLDivElement[]>("skill-bar");
const graphEl = templateRef<HTMLDivElement>("graph-container");

onMounted(() => {
  function makeGraphWidth() {
    if (!skillBarEl.value[0]) {
      // this doesn't really do anything, but otherwise vue throws an error when hotReload is activated
      return;
    }
    const width = skillBarEl.value[0].offsetWidth;
    graphEl.value.style["width"] = width + "px";
  }
  new ResizeObserver(makeGraphWidth).observe(skillBarEl.value[0]);

  skillBarEl.value.forEach((barEl, idx) => {
    anime({
      targets: Array.from(barEl.children).filter((e) =>
        e.className.includes("skill-bar"),
      ),
      width: (el: HTMLElement) => {
        return [0, `${el.dataset.percentage}%`];
      },
      duration: 700,
      easing: "easeInOutQuad",
      delay: idx * 200,
    });
  });

  anime({
    targets: graphEl.value,
    scale: [0, 1],
    easing: "spring(0.5, 80, 10, 10)",
  });
});
</script>

<template>
  <div>
    <table class="tech-skills-table">
      <thead>
        <tr class="text-primary-accent">
          <th align="center" class="pb-2"></th>
          <th align="center" class="pb-2">
            <span>
              Ability level
              <v-icon icon="mdi-information-outline" size="18" />
              <v-tooltip activator="parent" location="top" color="red">
                <div align="left">
                  <small class="text-white">
                    <div>
                      0%
                      <v-icon icon="mdi-arrow-right-thin" /> I know nothing of
                      this technology
                    </div>
                    <div>
                      100%
                      <v-icon icon="mdi-arrow-right-thin" /> I know everything
                      of this technology
                    </div>
                  </small>
                </div>
              </v-tooltip>
            </span>
          </th>
        </tr>
      </thead>

      <tbody ref="table-body" class="position-relative">
        <div class="graph-container" ref="graph-container">
          <div class="vertical-grid x-50">
            <div class="grid-label">
              50% <br />
              OK
            </div>
          </div>
          <div class="vertical-grid x-70">
            <div class="grid-label">
              70% <br />
              GOOD
            </div>
          </div>

          <div class="vertical-grid x-90">
            <div class="grid-label">
              90% <br />
              MASTER
            </div>
          </div>
        </div>

        <tr v-for="(tech, tIdx) in technologiesContent" :key="tIdx">
          <td align="right" class="white-space-nowrap pr-3">
            <span class="font-weight-black text-h6">{{ tech.label }}</span>
            <third-party-logo :from="tech.logo" class="ml-2" size="40" />
          </td>

          <td>
            <div
              class="skill-bar-container"
              :style="`color: ${tech.color};`"
              ref="skill-bar"
            >
              <div class="percentage-label">{{ tech.percentage }}%</div>
              <div
                class="skill-bar"
                :style="`width: ${tech.percentage}%;`"
                :data-percentage="tech.percentage"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.graph-container {
  $grid-color: transparentize($primary, 0);
  height: 100%;
  position: absolute;
  right: 1px;
  top: 0;
  background-color: transparentize($primary, 0.95);
  border-top-right-radius: 10px;
  border-left: 1px solid $grid-color;
  border-bottom: 1px solid $grid-color;
  .vertical-grid {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 100%;
    border-right: 1px dashed $grid-color;
    &.x-50 {
      left: 50%;
    }
    &.x-70 {
      left: 70%;
    }
    &.x-90 {
      left: 90%;
    }

    .grid-label {
      position: absolute;
      right: 0;
      bottom: -5px;
      transform: translate(50%, 100%);
      color: $primary-accent;
      text-align: center;
      font-size: 13px;
    }
  }
}

.skill-bar-container {
  position: relative;
  width: 100%;
  border-radius: 0 15px 15px 0;
  height: 10px;
  border: 1px solid transparentize(currentColor, 0.5);
  background-color: transparentize(currentColor, 0.8);
  border-left: none;

  .skill-bar {
    border-radius: inherit;
    border-end-end-radius: 0;
    border-start-end-radius: 0;
    height: 100%;
    background-color: currentColor;
  }
  .percentage-label {
    position: absolute;
    right: 0;
    top: 5px;
    transform: translateY(-100%);
    font-size: 14px;
    padding: 5px;
    //color: mix(currentColor, $on-surface, .7);
    color: $on-background;
  }
}
.white-space-nowrap {
  white-space: nowrap;
}

.tech-skills-table {
  margin-bottom: 50px;
  width: 100%;
  td:last-child {
    width: 100%; //makes last column fill remaining space
  }
  tr td {
    $padding-value: 10px;
    padding-bottom: $padding-value;
    padding-top: $padding-value;
  }
}
</style>
