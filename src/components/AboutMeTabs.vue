<script lang="ts" setup>
import { ref, onMounted } from "vue";

const tabItems = [
  {
    label: "Technical Abilities",
    icon: "mdi-sword-cross",
  },
  {
    label: "Personal Background",
    icon: "mdi-hiking",
  },
  {
    label: "Mastered Technologies",
    icon: "mdi-xml",
  },
] as const;

const abilitiesContent = [
  {
    icon: "mdi-thumb-up",
    text: "<b>Excelent Front-end knowledge</b> - I know the ins and outs of all the different mechanisms that operate in a modern browser",
  },
  {
    icon: "mdi-source-branch-check",
    text: "I'm <b>specialized</b> for <b>high complexity desktop projects</b>",
  },
  {
    icon: "mdi-dumbbell",
    text: "I <b>thrive in adversity</b>, there's nothing I love more than <b>learning new stuff</b>",
  },
  {
    icon: "mdi-book-open-page-variant",
    text: "I'm entirely <b>self taught</b> and <b>I'll never stop getting better</b>",
  },
  {
    // icon: "mdi-human-greeting-proximity",
    icon: "mdi-human-male-board-poll",
    text: "I can <b>handle ambiguidy</b> - all I need is a rough direction, I'm <b>great at planning and iterating</b> through options untill we're all happy with what we've got",
  },
  {
    // icon: "mdi-human-greeting-proximity",
    icon: "mdi-code-tags-check",
    // text: "Everywhere I've worked, I've always being known for the speed of my output and the resilience of my code",
    text: "I am known for my consistency in <b>speed</b> and the <b>reliability of my output</b>",
  },
];

const currentTabIdx = ref(Math.floor(tabItems.length / 2));
// BANANA - remove later
currentTabIdx.value = 2;
//

function changeTabTo(newTabIdx: number) {
  currentTabIdx.value = newTabIdx;
}
</script>

<template>
  <!-- TODO -> add some media-queries or v-cols for this to work in smaller width devices  -->
  <div class="w-fit-content">
    <h1 class="mb-5">All about me</h1>
    <v-card class="pa-10 w-fit-content" variant="text" max-width="800px">
      <div class="position-relative mb-13">
        <div class="d-flex justify-center align-center" ref="nav-container">
          <template v-for="(tab, tabIdx) in tabItems" :key="tabIdx">
            <!-- <v-icon v-if="tabIdx > 0" icon="mdi-unfold-more-vertical"/> -->
            <div v-if="tabIdx > 0" class="px-2 text-primary opacity-50">
              <v-icon icon="mdi-minus" size="10" />
              <v-icon icon="mdi-rhombus" size="10" />
              <v-icon icon="mdi-minus" size="10" />
            </div>

            <button
              class="nav-item-btn"
              @click="changeTabTo(tabIdx)"
              :class="{ 'active-nav': currentTabIdx == tabIdx }"
            >
              <span class="nav-item-icon">
                <v-icon :icon="tab.icon" size="30" />
              </span>
              <v-avatar
                v-if="false"
                color="primary"
                class="mb-2"
                :variant="currentTabIdx == tabIdx ? 'elevated' : 'tonal'"
                size="50"
              >
                <v-icon :icon="tab.icon" />
              </v-avatar>
              <div class="font-weight-black w-fit-content mx-auto">
                <span class="px-1">{{ tab.label }}</span>
                <div
                  class="nav-item-border"
                  :class="{ 'w-0': currentTabIdx != tabIdx }"
                />
              </div>
            </button>
          </template>
        </div>
      </div>

      <v-window v-model="currentTabIdx">
        <v-window-item>
          <!-- TECHNICAL HABILITIES -->
          <div class="about-me-info-container">
            <template v-for="(ability, aIdx) in abilitiesContent" :key="aIdx">
              <div
                class="d-flex align-center justify-center w-100 my-3"
                v-if="aIdx > 0"
              >
                <v-divider color="white" />
                <v-icon
                  icon="mdi-xml"
                  color="white"
                  class="mx-4 opacity-25"
                  size="20"
                />
                <v-divider color="white" />
              </div>

              <p>
                <v-avatar
                  variant="tonal"
                  rounded="rounded"
                  class="mr-2"
                  size="35"
                  color="primary"
                >
                  <v-icon :icon="ability.icon" />
                </v-avatar>

                <span v-html="ability.text"></span>
              </p>
            </template>
          </div>
        </v-window-item>

        <v-window-item>
          <!-- PERSONAL BACKGROUND -->
          s
        </v-window-item>

        <v-window-item>
          <!-- MASTERED TECHNOLOGIES -->
          <div class="about-me-info-container">
            <p>
              <v-avatar
                variant="tonal"
                rounded="rounded"
                class="mr-2"
                size="35"
                color="primary"
              >
                <v-icon icon="custom:vue" />
              </v-avatar>

              <span
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                impedit iure sapiente rerum quisquam, velit consectetur
                asperiores odit repellendus assumenda?</span
              >
            </p>

            <third-party-logo from="vue" />
            <third-party-logo from="css" />
            <third-party-logo from="html" />
            <third-party-logo from="typescript" />
            <third-party-logo from="javascript" />
            <third-party-logo from="python" />
          </div>
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.nav-item-border {
  border-bottom: 2px solid $primary;
  margin: auto;
  width: 100%;
  transition: width 0.4s;
}

.nav-item-btn {
  padding-top: 8px;
  padding-bottom: 5px;
  width: 160px;
  margin: 0 10px;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: all 0.1s;
  &:hover,
  &.active-nav {
    color: $white;
    transform: scale(1.05);
  }
}

.active-nav {
  .nav-item-icon {
    background-color: $primary;
    color: $white;
    box-shadow: 0 0 50px 5px transparentize($primary, 0.8);
  }
}

.nav-item-icon {
  padding: 14px;
  aspect-ratio: 1 / 1;
  display: inline-block;
  border-radius: 50%;
  margin-bottom: 5px;
  transition: all 0.3s;

  background-color: transparentize($primary, 0.85);
  color: $primary;

  box-shadow: 0 0 0px 5px transparentize($primary, 1);
}

.about-me-info-container {
  $base-color: $primary;
  p {
    font-size: 1.05em;

    :deep(b) {
      font-weight: 500;
      color: mix($base-color, $white, 0.25);
    }
  }
}
</style>
