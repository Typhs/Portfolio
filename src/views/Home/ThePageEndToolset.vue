<script lang="ts" setup>
import { use$App } from "@/store/$app";

const $app = use$App();

function toggleDirectosCommentary() {
  $app.directorMode.showPermanentToggle = true;
  $app.directorMode.showCode = true;
  $app.directorMode.showComment = true;

  $app.directorMode.isOn = !$app.directorMode.isOn;
}
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
        <v-card
          variant="tonal"
          color="primary-accent"
          class="pa-5"
          max-width="400px"
        >
          <h3 class="font-weight-bolder">
            <v-icon icon="mdi-script-text" class="mr-2" />
            Director's Commentary
          </h3>

          <!-- <v-divider class="my-2 border-opacity-25" color="primary-accent"/> -->
          <icon-divider class="my-2" icon="mdi-xml" color="secondary" />

          <div
            class="text-small text-muted b-highlighter-container"
            align="center"
          >
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
          <v-btn
            :variant="$app.directorMode.isOn ? 'tonal' : 'elevated'"
            color="secondary"
            class="mt-5"
            @click="toggleDirectosCommentary()"
          >
            <v-icon icon="mdi-comment-text" class="mr-2" />
            <span v-if="!$app.directorMode.isOn"> ACTIVATE </span>
            <span v-else> DEACTIVATE </span>
          </v-btn>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
