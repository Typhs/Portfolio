<script lang="ts" setup></script>

<template>
  <div class="position-relative w-fit-content" style="outline: 1px solid red">
    <div class="comment-bubble">
      <v-btn size="x-large" color="secondary" icon>
        <v-icon icon="mdi-thought-bubble" />
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comment-bubble {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
