<script lang="ts" setup>
const projectLibraries = [
  {
    name: "Vue.js",
    icon: "custom:vue",
  },
  {
    name: "Vuetify",
    icon: "custom:vuetify",
  },
  {
    name: "Typescript",
    icon: "custom:typescript",
  },
  {
    name: "Pinea",
  },
  {
    name: "Lodash",
  },
  {
    name: "SASS",
  },
  {
    name: "Anime.js",
  },
];
</script>

<template>
  <div
    class="home-max-width mx-auto"
    data-git-path="src/views/Home/TheProjectInsights.vue"
  >
    <v-expand-transition>
      <div align="">
        <div class="pa-3">
          <h3 class="text-secondary mb-4">About this Project</h3>
          <p>
            This project is a personal portfolio, and a work in progress. It's a
            showcase of my skills and a playground for my creativity.
          </p>
          <div class="pl-5 mt-2">
            <ul class="ul-spacer">
              <li>
                The main libraries used in this project are

                <span v-for="(library, lIdx) in projectLibraries" :key="lIdx">
                  <v-chip
                    color="secondary"
                    variant="tonal"
                    size="small"
                    class="font-weight-bold"
                  >
                    <v-icon
                      :icon="library.icon"
                      size="22"
                      class="mr-1"
                      v-if="library.icon"
                    />
                    {{ library.name }}
                  </v-chip>
                  <span v-if="lIdx < projectLibraries.length - 2" class="mr-2"
                    >,</span
                  >
                  <span v-else-if="lIdx == projectLibraries.length - 2">
                    and
                  </span>
                </span>
              </li>
              <li>
                For development I'm using
                <v-chip
                  color="secondary"
                  variant="tonal"
                  size="small"
                  class="font-weight-bold"
                >
                  git </v-chip
                >,
                <v-chip
                  color="secondary"
                  variant="tonal"
                  size="small"
                  class="font-weight-bold"
                >
                  Vite </v-chip
                >,
                <v-chip
                  color="secondary"
                  variant="tonal"
                  size="small"
                  class="font-weight-bold"
                >
                  Yarn </v-chip
                >,
                <v-chip
                  color="secondary"
                  variant="tonal"
                  size="small"
                  class="font-weight-bold"
                >
                  Webpack </v-chip
                >, and
                <v-chip
                  color="secondary"
                  variant="tonal"
                  size="small"
                  class="font-weight-bold"
                >
                  Husky
                </v-chip>
              </li>
              <li>
                The entire project is available on
                <a href="https://github.com/Typhs/">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </v-expand-transition>
  </div>
</template>

<style lang="scss" scoped>
.ul-spacer {
  li {
    margin-bottom: 5px;
  }
}
</style>
