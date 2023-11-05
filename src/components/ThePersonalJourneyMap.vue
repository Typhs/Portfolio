<script lang="ts" setup>
import { templateRef } from "@vueuse/core";
import { onMounted } from "vue";
import anime from "animejs";
import { v4 as uuidv4 } from "uuid";
const id = uuidv4(); // unique id generated, used to uniquify the IDs of svg elements

const svgEl = templateRef<SVGElement>("svg");

const mapPoints = [
  {
    label: "SCHOOL",
    key: "a",
    icon: "custom:school",
  },
  {
    label: "UNIVERSITY",
    key: "b",
    icon: "custom:college",
  },
  {
    label: "WORK",
    key: "c",
    icon: "mdi-tie",
  },
];

onMounted(async () => {
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

  await animatePoint("a");
  await animatePath(1);
  await animatePoint("b");
  await animatePath(2);
  await animatePoint("c");
});

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
function animatePoint(pointId: "a" | "b" | "c") {
  return new Promise((resolve) => {
    const el = mapPointEls.value.find(
      (el) => String(el.dataset.pointId) == String(pointId),
    );
    anime({
      targets: el,
      scale: [0, 1],
      easing: "spring(1, 100, 50, 20)",
      complete: resolve,
    });
  });
}
</script>

<template>
  <div class="position-relative mb-10">
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
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.superpositioned-on-svg {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  .map-point {
    $point-color: $secondary;
    $point-bg: mix($point-color, $background, 0.9);
    position: absolute;
    transform: translate(-50%, -50%);
    :deep(.v-avatar) {
      box-shadow: 0 0 0 10px $point-bg;
      //outline: 12px solid $point-bg;
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
  }
}
svg.journey-map-svg {
  fill: $primary;

  path.content {
    fill: none;
    stroke: $primary;
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
</style>
