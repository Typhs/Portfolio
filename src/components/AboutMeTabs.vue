<script lang="ts" setup>
const tabItems = [
  {
    label: "Technical abilities",
    icon: "mdi-sword-cross",
  },
  {
    label: "Personal background",
    icon: "mdi-dog",
  },
  {
    label: "teste super",
    icon: "mdi-dog",
  },
] as const;
</script>

<template>
  <h1 class="mb-2">About me</h1>
  <v-card class="pa-8 w-fit-content">
    <div class="d-flex justify-center align-center">
      <template v-for="(tab, tabIdx) in tabItems">
        <!-- <v-icon v-if="tabIdx > 0" icon="mdi-unfold-more-vertical"/> -->
        <div v-if="tabIdx > 0" class="px-2">
          <v-icon icon="mdi-minus" size="15" />
          <v-icon icon="mdi-rhombus" size="10" />
          <v-icon icon="mdi-minus" size="15" />
        </div>

        <button class="nav-item-btn">
          <v-avatar color="primary" class="mb-2" size="50">
            <v-icon :icon="tab.icon" />
          </v-avatar>
          <div>
            {{ tab.label }}
          </div>
        </button>
      </template>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
.nav-item-btn {
  width: 180px;
  margin: 0 10px;
}
</style>
