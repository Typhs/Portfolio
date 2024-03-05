<script lang="ts" setup>
import { templateRef } from "@vueuse/core";
import { onMounted, ref } from "vue";
import anime from "animejs";
import { v4 as uuidv4 } from "uuid";
const id = uuidv4(); // unique id generated, used to uniquify the IDs of svg elements

const svgEl = templateRef<SVGElement>("svg");

const mapPoints = [
  {
    label: "SCHOOL",
    key: "a",
    icon: "custom:school",
    cardPlacement: "left",
    stage: 1,
  },
  {
    label: "UNIVERSITY",
    key: "b",
    icon: "custom:college",
    cardPlacement: "right",
    stage: 2,
  },
  {
    label: "WORK",
    key: "c",
    icon: "mdi-tie",
    cardPlacement: "left",
    stage: 3,
  },
] as const;

const initStage = ref(0);

onMounted(() => {
  initAnimation();
});

function initAnimation() {
  anime({
    //initialize all the paths as invisible
    targets: svgEl.value?.querySelectorAll(`path.mask`),
    strokeDashoffset: [anime.setDashoffset],
    duration: 0,
  });
  anime({
    targets: mapPointEls.value,
    scale: 0,
    duration: 0,
  });
  anime({
    targets: mapPointCardEls.value,
    scaleY: 0,
    duration: 0,
  });

  setTimeout(async () => {
    initStage.value = 0;
    await animatePoint("a");
    initStage.value = 1;
    await animatePath(1);
    await animatePoint("b");
    initStage.value = 2;
    await animatePath(2);
    await animatePoint("c");
    initStage.value = 3;
  }, 300);
}

function animatePath(pathNum: 1 | 2) {
  return new Promise((resolve) => {
    const el = svgEl.value?.querySelector(`.map-path-${pathNum}.mask`);
    anime({
      targets: el,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      complete: resolve,
    });
  });
}

const mapPointEls = templateRef<HTMLElement[]>("map-point");
const mapPointCardEls = templateRef<HTMLElement[]>("map-point-card");

function animatePoint(pointId: "a" | "b" | "c") {
  return new Promise((resolve) => {
    const pointEl = mapPointEls.value.find(
      (el) => String(el.dataset.pointId) == String(pointId),
    );
    const cardEl = mapPointCardEls.value.find(
      (el) => String(el.dataset.pointId) == String(pointId),
    );

    anime({
      targets: cardEl,
      scaleY: [0, 1],
      easing: "easeInQuad",
      duration: 150,
      delay: 900,
    });

    anime({
      targets: pointEl,
      scale: [0, 1],
      easing: "spring(1, 100, 50, 20)",
      complete: resolve,
    });
  });
}
</script>

<template>
  <div
    class="position-relative mb-10"
    data-git-path="src/components/ThePersonalJourneyMap.vue"
  >
    <svg class="journey-map-svg" viewBox="0 0 200 200" width="100%" ref="svg">
      <!-- 
        ============ HOW THIS WORKS ============
        each actual dashed real-path has an equivalent mask-path and uses it.
        the mask-path has the same coordenates than the real-path.
        to do the animation, we are animating the mask-path growing instead of animating the real-path.
        we do that because we depend on dasharray operations to make any path animations
        and we can't spare those properties of the real-path, since it uses them to make the dashed line style
        
        Example -> https://codepen.io/PointC/pen/xxZGqJM/8379a51c7fd5152f177ab3e0f7eca26f
        ============ HOW THIS WORKS ============
      -->
      <defs>
        <mask :id="`${id}-map-mask-1`" maskUnits="userSpaceOnUse">
          <path
            class="map-path-1 mask"
            d="
              M 35,25 
              S 20,75  80 55 
              S 80 100  160 100 
            "
          />
        </mask>

        <mask :id="`${id}-map-mask-2`" maskUnits="userSpaceOnUse">
          <path
            class="map-path-2 mask"
            d="
              M 160, 100 
              S 210, 150 150 130 
              S 100, 140 90 150 
              S 20, 150 50 185
            "
          />
        </mask>
      </defs>

      <g :mask="`url(#${id}-map-mask-1)`">
        <path
          class="map-path-1 content"
          d="
            M 35,25 
            S 20,75  80 55 
            S 80 100  160 100 
          "
        />
      </g>

      <g :mask="`url(#${id}-map-mask-2)`">
        <path
          class="map-path-2 content"
          d="
            M 160, 100 
            S 210, 150 150 130 
            S 100, 140 90 150 
            S 20, 150 50 185
          "
        />
      </g>
    </svg>

    <div class="superpositioned-on-svg">
      <div
        class="map-point"
        :class="`point-${point.key}`"
        v-for="(point, pIdx) in mapPoints"
        :key="pIdx"
      >
        <div ref="map-point" :data-point-id="point.key">
          <v-avatar color="secondary" size="70">
            <v-icon :icon="point.icon" size="55" />
          </v-avatar>
          <div class="map-point-label">
            {{ point.label }}
          </div>
        </div>

        <div
          class="point-card-container"
          :class="
            point.cardPlacement == 'left'
              ? 'positioned-left'
              : 'positioned-right'
          "
        >
          <div
            class="d-flex align-center"
            :class="
              point.cardPlacement == 'left' ? 'justify-start' : 'justify-end'
            "
            ref="map-point-card"
            :data-point-id="point.key"
          >
            <v-icon
              icon="mdi-arrow-left-thin"
              class="ml-4"
              size="30"
              v-if="point.cardPlacement == 'left'"
            />
            <v-expand-transition>
              <div class="point-card" v-show="initStage >= point.stage">
                <template v-if="point.key == 'a'">
                  <div align="right" class="card-date">
                    <v-chip size="small" class="mb-1" v-if="point.key == 'a'">
                      2018
                    </v-chip>
                  </div>
                  <div>
                    Started <b>studying code on my own</b> since Highschool
                  </div>
                </template>
                <template v-else-if="point.key == 'b'">
                  <div align="left" class="card-date">
                    <v-chip size="small" class="mb-1" v-if="point.key == 'b'">
                      2020
                    </v-chip>
                  </div>
                  <div>
                    Enroled in University for
                    <b>Systems Analysis and Development</b>
                  </div>
                </template>
                <template v-else-if="point.key == 'c'">
                  <div align="right" class="card-date">
                    <v-chip size="small" class="mb-1" v-if="point.key == 'c'">
                      2022
                    </v-chip>
                  </div>
                  <div>
                    <span data-nosnippet
                      >Entered the industry in Fiqon as: </span
                    ><br />
                    <small>
                      <v-icon icon="mdi-square-rounded" size="5" class="mr-1" />
                      <b>Intern</b>
                      <v-icon icon="mdi-arrow-right-thin" size="14" /> 1 month
                      <br />
                      <v-icon icon="mdi-square-rounded" size="5" class="mr-1" />
                      <b>Junior Front-End dev</b>
                      <v-icon icon="mdi-arrow-right-thin" size="14" /> 2 months
                      <br />
                      <v-icon icon="mdi-square-rounded" size="5" class="mr-1" />
                      <b>Mid Front-End dev</b>
                      <v-icon icon="mdi-arrow-right-thin" size="14" /> 8 months
                      <br />
                      <v-icon icon="mdi-square-rounded" size="5" class="mr-1" />
                      <b>Senior Front-End dev</b>
                      <v-icon icon="mdi-arrow-right-thin" size="14" /> 7 months
                      <br />
                    </small>
                  </div>
                </template>
              </div>
            </v-expand-transition>

            <v-icon
              icon="mdi-arrow-right-thin"
              class="mr-4"
              size="30"
              v-if="point.cardPlacement == 'right'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$point-color: $secondary;
$card-color: $on-background;
$map-path-color: $primary;

.superpositioned-on-svg {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  .map-point {
    &:hover {
      .point-card-container {
        opacity: 1 !important;
      }
    }
    $point-bg: mix($point-color, $background, 0.9);
    position: absolute;
    transform: translate(-50%, -50%);
    :deep(.v-avatar) {
      box-shadow: 0 0 0 10px $point-bg;
      .v-icon {
        color: $point-bg;
      }
    }
    .map-point-label {
      position: absolute;
      left: 50%;
      bottom: -2px;
      transform: translate(-50%, 100%);
      font-weight: bolder;
      padding: 2px 5px;
      border-radius: 5px;
      background-color: transparentize($point-color, 0.9);
      background-color: $point-bg;
      color: $point-color;
    }

    &.point-a {
      left: calc(35 / 200 * 100 * 1%);
      top: calc(25 / 200 * 100 * 1%);
    }
    &.point-b {
      left: calc(160 / 200 * 100 * 1%);
      top: calc(100 / 200 * 100 * 1%);
    }
    &.point-c {
      left: calc(50 / 200 * 100 * 1%);
      top: calc(183 / 200 * 100 * 1%);
    }

    .point-card-container {
      color: $card-color;
      position: absolute;
      opacity: 0.8;
      transition: opacity 0.3s;
      &.positioned-left {
        right: 0;
        top: 50%;
        transform: translate(100%, -50%);
        .point-card {
          border-left-width: 3px;
          margin-left: -7px;
        }
      }
      &.positioned-right {
        left: 0;
        top: 50%;
        transform: translate(-100%, -50%);
        .point-card {
          border-right-width: 3px;
          margin-right: -7px;
        }
      }

      .point-card {
        position: relative;
        //color: $on-background;
        text-align: left;
        width: max-content;
        max-width: 300px;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: mix($card-color, $background, 0.9);
        border: 0 solid $card-color;
        .card-date {
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
          transform: translateY(-100%);
          animation: transition-opacity 0.6s;
          animation-timing-function: linear;
          animation-fill-mode: both;
          animation-delay: 0.4s;
          animation-iteration-count: 1;
        }
      }
    }
  }
}
svg.journey-map-svg {
  fill: $map-path-color;

  path.content {
    fill: none;
    stroke: $map-path-color;
    stroke-width: 1.2;
    stroke-dasharray: 4;
    stroke-dashoffset: 4;
  }
  path.mask {
    fill: none;
    stroke: white;
    stroke-width: 5;
  }
}

@keyframes transition-opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
