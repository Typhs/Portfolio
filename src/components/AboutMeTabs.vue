<script lang="ts" setup>
import { ref, onMounted } from "vue";
import anime from "animejs";
import { templateRef } from "@vueuse/core";
const tabItems = [
  {
    label: "Technical abilities",
    icon: "mdi-sword-cross",
  },
  {
    label: "Personal background",
    icon: "mdi-hiking",
  },
  {
    label: "teste super",
    icon: "mdi-card-account-details",
  },
] as const;

const currentTabIdx = ref(Math.floor(tabItems.length / 2));

const navContainer = templateRef<HTMLDivElement>("nav-container");

const signifierEl = templateRef<HTMLDivElement>("current-tab-signifier");

function changeTabTo(newTabIdx: number) {
  currentTabIdx.value = newTabIdx;
}
</script>

<template>
  <div class="w-fit-content">
    <h1 class="mb-5">About me</h1>
    <v-card class="pa-10 w-fit-content">
      <div class="position-relative">
        <div class="d-flex justify-center align-center" ref="nav-container">
          <template v-for="(tab, tabIdx) in tabItems">
            <!-- <v-icon v-if="tabIdx > 0" icon="mdi-unfold-more-vertical"/> -->
            <div v-if="tabIdx > 0" class="px-2 text-primary opacity-25">
              <v-icon icon="mdi-minus" size="10" />
              <v-icon icon="mdi-rhombus" size="10" />
              <v-icon icon="mdi-minus" size="10" />
            </div>

            <button class="nav-item-btn" @click="changeTabTo(tabIdx)">
              <v-avatar
                color="primary"
                class="mb-2"
                :variant="currentTabIdx == tabIdx ? 'elevated' : 'tonal'"
                size="50"
              >
                <v-icon :icon="tab.icon" />
              </v-avatar>
              <div
                class="font-weight-black w-fit-content mx-auto"
                :class="{ 'text-white': currentTabIdx == tabIdx }"
              >
                <span class="px-1">{{ tab.label }}</span>
                <div
                  class="tab-bottom-border"
                  :class="{ 'w-0': currentTabIdx != tabIdx }"
                />
              </div>
            </button>
          </template>
        </div>
      </div>
      <v-divider class="my-8" color="primary" />
      <v-window v-model="currentTabIdx">
        <v-window-item>
          <!-- TECHNICAL HABILITIES -->
          I'm Specialized for high complexity desktop projects
        </v-window-item>

        <v-window-item>
          <!-- PERSONAL BACKGROUND -->
          s
        </v-window-item>

        <v-window-item>
          <!-- OTHER -->
          s
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.tab-bottom-border {
  border-bottom: 2px solid $primary;
  margin: auto;
  width: 100%;
  transition: width 0.4s;
}
.nav-item-btn {
  width: 180px;
  margin: 0 10px;
}
</style>
