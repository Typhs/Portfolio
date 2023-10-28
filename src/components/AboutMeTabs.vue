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
    <v-card class="pa-10 w-fit-content" variant="text" max-width="800px">
      <div class="position-relative">
        <div class="d-flex justify-center align-center" ref="nav-container">
          <template v-for="(tab, tabIdx) in tabItems">
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
      <v-divider class="my-8" color="primary" />
      <v-window v-model="currentTabIdx">
        <v-window-item>
          <!-- TECHNICAL HABILITIES -->
          <div>
            <p>I'm Specialized for high complexity desktop projects</p>

            <p>
              Excelent Front-end knowledge -> I know the ins and outs of all the
              different mechanisms that operate in a modern browser
            </p>
            <p>
              I thrive in adversity, there's nothing I love more than learning
              new stuff
            </p>
            <p>I'm entirely self taught and I'll never stop getting better</p>
          </div>
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
.nav-item-border {
  border-bottom: 2px solid $primary;
  margin: auto;
  width: 100%;
  transition: width 0.4s;
}

.nav-item-btn {
  padding-top: 8px;
  padding-bottom: 5px;
  width: 180px;
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
</style>
