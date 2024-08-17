<script lang="ts" setup>
import emitter from "@/plugins/mitt";
import { use$App } from "@/store/$app";
import { templateRef } from "@vueuse/core";
import anime from "animejs";
import { nextTick, onMounted, watch } from "vue";

const $app = use$App();

let interval: any;
watch(
  () => $app.directorMode.isOn && $app.directorMode.showCode,
  (newValue) => {
    if (newValue == true) {
      // ACTIVATE COMMENTARY MODE
      document.body.classList.add("commentary-mode-active");
      interval = setInterval(() => {
        // we're using a setInterval because the components can be rendered after the mode is activated
        highlightComponents();
      }, 500);
      highlightComponents();
    } else {
      // DEACTIVATE COMMENTARY MODE
      clearInterval(interval);
      document.body.classList.remove("commentary-mode-active");
      cleanupOverlay();
    }
  },
  { immediate: true },
);

function cleanupOverlay() {
  document
    .querySelectorAll(".commentary-overlay-component-label")
    .forEach((e) => e.remove());
}

function highlightComponents() {
  if (!$app.directorMode.isOn || !$app.directorMode.showCode) {
    return;
  }

  const components = document.querySelectorAll("[data-git-path]");
  components.forEach((componentEl) => {
    if (
      componentEl.querySelector("div.commentary-overlay-component-label") ==
      null
    ) {
      const newEl = document.createElement("div");
      const componentPath: string = (componentEl.attributes as any)[
        "data-git-path"
      ].value;

      newEl.onclick = (e: MouseEvent) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        $app.selectCodePath(componentPath);
      };

      newEl.classList.add("commentary-overlay-component-label");
      newEl.appendChild(document.createElement("div"));

      let name = componentPath.split("/").pop()!;
      newEl.firstChild!.textContent = name;

      componentEl.insertBefore(newEl, componentEl.firstChild);
    }
  });
}

const btnIndicatorEl = templateRef<HTMLElement>("btn-indicator");
emitter.on("animate-director-mode-indicator", async (originContainer) => {
  await nextTick();
  const btnContainer = btnIndicatorEl.value.parentElement!;
  const originBoundings = originContainer.getBoundingClientRect();
  const btnBoundings = btnContainer.getBoundingClientRect();

  const dif = {
    x: originBoundings.x - btnBoundings.x,
    y: originBoundings.y - btnBoundings.y,
  };

  const timeline = anime.timeline({
    targets: btnIndicatorEl.value,
    easing: "easeInOutQuad",
  });

  originContainer.style.opacity = "0";
  const indicatorSize = 15;
  timeline
    .add({
      opacity: [0, 1],
      duration: 0,
    })
    .add({
      borderRadius: ["5px", "50%"],
      width: [originContainer.offsetWidth, indicatorSize],
      height: [originContainer.offsetHeight, indicatorSize],
      translateX: originContainer.offsetWidth / 2,
      translateY: originContainer.offsetHeight / 2,
      duration: 250,
    })
    .add({
      top: [dif.y, 0],
      left: [dif.x, 0],
      duration: 400,
    })
    .add({
      borderRadius: ["50%", "5px"],
      width: [indicatorSize, btnContainer.offsetWidth],
      height: [indicatorSize, btnContainer.offsetHeight],
      translateX: [btnContainer.offsetWidth / 2, 0],
      translateY: [btnContainer.offsetHeight / 2, 0],
      duration: 250,
    })
    .add({
      opacity: [1, 0],
      duration: 10,
    });

  timeline.finished.then(() => {
    $app.directorMode.showPermanentToggle = true;
    anime({
      targets: originContainer,
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutQuad",
    });
  });
});
</script>

<template>
  <div class="commentary-overlay-wrapper">
    <div
      class="commentary-overlay-container"
      :class="{ 'is-mode-active': $app.directorMode.isOn }"
    >
      <div class="d-flex justify-start align-start pa-5">
        <div class="commentary-header">
          <h2 class="commentary-title clickable">
            <v-icon icon="mdi-script-text" class="mr-2" size="small" />
            Director's Commentary
          </h2>
          <div class="commentary-toggles-container">
            <div>
              <v-checkbox
                color="secondary"
                class="clickable w-fit-content"
                label="Show components code"
                hide-details
                density="comfortable"
                v-model="$app.directorMode.showCode"
              />
              <!-- <v-checkbox
                color="secondary"
                class="clickable w-fit-content"
                label="Show comments"
                hide-details
                density="comfortable"
                v-model="$app.directorMode.showComment"
              >
              </v-checkbox> -->
            </div>
          </div>
        </div>
      </div>

      <div class="w-fit-content clickable">
        <v-expand-transition>
          <div v-if="$app.directorMode.currentCodePath">
            <v-card width="500px" height="550px" variant="text">
              <component-code-viewer
                :key="$app.directorMode.currentCodePath"
                :path="$app.directorMode.currentCodePath"
              />
            </v-card>
          </div>
        </v-expand-transition>
      </div>
    </div>
    <div class="corner-right-btn pa-5 clickable">
      <!-- v-if="$app.directorMode.showPermanentToggle" -->
      <div class="position-relative">
        <div class="director-mode-btn-indicator" ref="btn-indicator" />
        <span :class="{ 'opacity-0': !$app.directorMode.showPermanentToggle }">
          <v-btn
            v-if="$app.directorMode.isOn"
            variant="tonal"
            color="secondary"
            @click="$app.directorMode.isOn = !$app.directorMode.isOn"
          >
            EXIT COMMENTARY MODE
            <v-icon icon="mdi-close-circle-outline" class="ml-2" />
          </v-btn>
          <v-btn
            v-else
            variant="elevated"
            color="secondary"
            @click="$app.directorMode.isOn = !$app.directorMode.isOn"
          >
            ENTER COMMENTARY MODE
            <v-icon icon="mdi-script-text" class="ml-2" />
          </v-btn>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$commentary-color: $white;
$overlay-bg: transparentize($primary, 0.92);

.commentary-overlay-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;

  .commentary-overlay-container {
    height: 100%;
    background-color: $overlay-bg;
    color: $commentary-color;
    width: 100%;
    height: 100%;
    transition: all 0.2s;
    opacity: 0;
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
  }

  .corner-right-btn {
    position: fixed;
    top: 0;
    right: 0;
    pointer-events: initial;
  }
  // =============

  .commentary-header {
    transition:
      transform 0.2s,
      opacity 0.5s;
    transition-timing-function: ease-in-out;
    transform: translateX(-20%);
    opacity: 0;

    $comment-border: 2px solid $commentary-color;
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

.director-mode-btn-indicator {
  background-color: $secondary;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;
}
</style>

<style lang="scss">
/* NOTE - WHAT I'M DOING RIGHT NOW:
  Stylizing components with 'data-git-name' set attribute when Commentary Mode is active
  currently the only one with that attribute set is 'AboutMeTabs.vue'

  also need to do the code that creates an overlapping cloned box element to the original one, so that we don't style the actual component

  when user clicks on the label of that component, open a section with its file's code
  we'll be using the github api for that
*/

$overlay-color: $secondary;
$overlay-color-faded: transparentize($overlay-color, 0.4);
$tab-radius: 5px;

body.commentary-mode-active {
  [data-git-path] {
    outline: 1px solid $overlay-color-faded;
    border-radius: 5px;
    border-top-left-radius: 0;
    transition: all 0.2s;
    &:has(> .commentary-overlay-component-label div:hover) {
      outline-color: $overlay-color;
    }
  }
}

.commentary-overlay-component-label {
  transition: all 0.2s;
  text-align: left;
  transform: translateY(-100%);
  color: $overlay-color-faded;
  font-weight: 600;
  font-size: 18px;
  margin-left: -1px;
  position: absolute;
  & > div {
    padding-left: 10px;
    padding-right: 10px;
    background-color: $overlay-color-faded;
    border-radius: $tab-radius $tab-radius 0 0;
    width: fit-content;
    color: $black;
    cursor: pointer;
    z-index: 10;
    transition:
      all 0.2s,
      filter 0;
    font-family: monospace;
    text-rendering: optimizeLegibility;

    &:hover {
      background-color: $overlay-color;
    }
    &:active {
      filter: brightness(0.9);
    }
  }
}
</style>
