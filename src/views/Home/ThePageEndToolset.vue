<script lang="ts" setup></script>

<template>
  <div align="center">
    Well, since you came all this way, here's a little something for you
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
        <icon-divider class="my-2" icon="mdi-xml" color="primary-accent" />

        <div class="text-small text-muted b-highlighter-container">
          <p>
            Shows <b>notes</b> from the author on
            <b>how the project was built</b> along with some of the challenges
            faced. Also <b>highlights code snippets</b> and
            <b>componentization</b>.
          </p>
          <p></p>
        </div>
        <v-btn color="primary" class="mt-5">
          <v-icon icon="mdi-comment-text" class="mr-2" />
          Activate
        </v-btn>
      </v-card>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
