<script lang="ts" setup>
import { use$App } from "@/store/$app";

const $app = use$App();
</script>

<template>
  <div
    class="commentary-overlay-wrapper"
    :class="{ 'is-mode-active': $app.directorMode.isOn }"
  >
    <div class="d-flex justify-space-between align-start ma-5">
      <div class="commentary-header">
        <h2 class="commentary-title clickable">
          <v-icon icon="mdi-script-text" class="mr-2" size="small" />
          Director's Commentary
        </h2>
        <div class="commentary-toggles-container">
          <div class="clickable">
            <v-checkbox
              label="Show components code"
              hide-details
              density="comfortable"
              v-model="$app.directorMode.showCode"
            />
            <v-checkbox
              label="Show comments"
              hide-details
              density="comfortable"
              v-model="$app.directorMode.showComment"
            >
            </v-checkbox>
          </div>
        </div>
      </div>

      <v-btn
        variant="tonal"
        class="clickable"
        color="yellow"
        @click="$app.directorMode.isOn = false"
      >
        EXIT COMMENTARY MODE
        <v-icon icon="mdi-close-circle" class="ml-2" />
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$overlay-color: $secondary;
$overlay-bg: transparentize($primary, 0.92);

.commentary-overlay-wrapper {
  background-color: $overlay-bg;
  color: $overlay-color;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: all 0.2s;

  opacity: 0;
  pointer-events: none;

  &.is-mode-active {
    opacity: 1;
    .clickable {
      pointer-events: initial;
    }

    .commentary-header {
      transform: translateX(0);
      opacity: 1;
    }
  }

  // =============

  .commentary-header {
    transition:
      transform 0.2s,
      opacity 0.5s;
    transition-timing-function: ease-in-out;
    transform: translateX(-20%);
    opacity: 0;

    $comment-border: 2px solid $overlay-color;
    .commentary-title {
      border-bottom: $comment-border;
      border-left: $comment-border;
      padding-bottom: 5px;
      border-bottom-left-radius: 10px;
      padding-left: 10px;
      padding-right: 50px;
    }

    .commentary-toggles-container {
      margin-left: 28px;
      border-left: $comment-border;
      padding-left: 10px;
      padding-top: 10px;
    }
  }
}
</style>
