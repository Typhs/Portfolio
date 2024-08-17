<script lang="ts" setup>
import emitter from "@/plugins/mitt";
import { use$App } from "@/store/$app";
import { templateRef } from "@vueuse/core";

const $app = use$App();

function toggleDirectorsCommentary() {
  $app.directorMode.showCode = true;
  $app.directorMode.showComment = true;

  $app.directorMode.isOn = !$app.directorMode.isOn;

  if (
    $app.directorMode.isOn == false &&
    !$app.directorMode.showPermanentToggle
  ) {
    emitter.emit("animate-director-mode-indicator", btnContainerEl.value);
  }
}

const btnContainerEl = templateRef<HTMLElement>("btn-container");
</script>

<template>
  <div
    align="center"
    data-git-path="src/views/Home/ThePageEndToolset.vue"
    class="w-fit-content mx-auto"
  >
    <div class="pa-4">
      Here you can see some of the behind the scenes of this project
      <div class="mt-3 d-flex align-center justify-center">
        <v-card variant="tonal" color="primary" class="pa-5" max-width="600px">
          <h3 class="font-weight-bolder text-secondary">
            <v-icon icon="mdi-script-text" class="mr-2" />
            Director's Commentary
          </h3>

          <!-- <v-divider class="my-2 border-opacity-25" color="primary-accent"/> -->
          <icon-divider class="my-2" icon="mdi-xml" color="secondary" />

          <div class="text-muted b-highlighter-container" align="center">
            <p>
              Shows <b>notes</b> from the author on
              <b>how this project was built</b> along with some of the
              <b> challenges faced</b>.
            </p>
            <br />
            <p>
              Also <b>highlights code snippets</b> and
              <b>code componentization</b>.
            </p>
          </div>
          <div ref="btn-container" class="w-fit-content mx-auto mt-5">
            <v-btn
              :variant="$app.directorMode.isOn ? 'tonal' : 'elevated'"
              color="secondary"
              @click="toggleDirectorsCommentary()"
            >
              <v-icon icon="mdi-comment-text" class="mr-2" />
              <span v-if="!$app.directorMode.isOn"> ACTIVATE </span>
              <span v-else> DEACTIVATE </span>
            </v-btn>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
