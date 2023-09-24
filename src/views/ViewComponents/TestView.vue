<template>
  <div>
    <div class="parallax-container" ref="parallax-container">
      <div class="parallax-background parallax-layer" data-depth="0.10">
        <constellation-background
          class="h-100 expand-init"
          :speedModifier="1"
        />
      </div>

      <div class="parallax-layer h-100 pointer-events-none" data-depth="0.40">
        <circle-header-v2
          class="center-middle expand-init pointer-events-all"
        />
        <!-- v-model="circleRotatingAngle"
          @mousemove="speedUpConstellation()" -->
      </div>

      <div
        class="layer-0 parallax-layer pointer-events-none"
        data-depth="0.1"
      />

      <div
        class="layer-1 parallax-layer pointer-events-none"
        data-depth="0.2"
      />

      <div
        class="layer-2 parallax-layer pointer-events-none"
        data-depth="0.5"
      />

      <!-- <div class="layer-3 parallax-layer pointer-events-none" data-depth="0.5" /> -->

      <!-- <div class="layer-overlay parallax-layer" data-depth="0.85" /> -->
    </div>

    <div class="after-parallax">
      <div style="height: 1500px">after</div>
    </div>
  </div>
</template>

<script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HtmlHTMLAttributes } from "vue";
gsap.registerPlugin(ScrollTrigger);
import ConstellationBackground from "@/views/ViewComponents/Home/ConstellationBackground.vue";
import CircleHeaderV2 from "@/views/ViewComponents/Home/CircleHeaderV2.vue";

export default {
  components: {
    ConstellationBackground,
    CircleHeaderV2,
  },
  data() {
    return {};
  },
  mounted() {
    this.initParallax();
  },
  methods: {
    initParallax() {
      let parallaxContainer = <HTMLElement>this.$refs["parallax-container"];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parallaxContainer,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray(".parallax-layer").forEach((layer: any) => {
        const depth = layer.dataset.depth;
        const movement = -(layer.offsetHeight * depth);
        tl.to(layer, { y: movement, ease: "none" }, 0);
      });
    },
  },
};
</script>

<style lang="scss">
$parallaxHeight: 130vh;

.parallax-container {
  height: $parallaxHeight;
  overflow: hidden;
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  z-index: 0;
}
.after-parallax {
  position: relative;
  background-color: #0a0914;
}
.parallax-layer {
  background-position: bottom center;
  background-size: auto;
  background-repeat: no-repeat;
  width: 100%;
  height: $parallaxHeight;
  position: fixed;
  z-index: -1;
}

.parallax-background {
  background-image: url("@/assets/heroHeader/header-background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  //filter: contrast(2);
}

.layer-0 {
  background-image: url("@/assets/heroHeader/bg-fade-wave.png");
  background-position: left bottom;
  background-size: 100% auto;
}
.layer-1 {
  background-image: url("@/assets/heroHeader/back-buildings-RESIZED.png");
  background-position: left bottom;
  background-size: 100% auto;
}
.layer-2 {
  background-image: url("@/assets/heroHeader/front-buildings-RESIZED.png");
  background-position: bottom;
  background-size: 100% auto;
}
.layer-3 {
  background-image: url("@/assets/header/BuildingsHeader-3.png");
  background-position: right bottom;
  background-size: 100% auto;
}
.layer-overlay {
  //background-image: url("@/assets/header/BuildingsHeader-clouds.png");
  //background-color: red;
  background-position: bottom;
  background-size: cover;
  background-position: center;
  //opacity: 0.2;
  background-repeat: repeat;
  box-shadow: inset 0 0 100px 15px red;
}

.pointer-events-none {
  pointer-events: none;
}
.pointer-events-all {
  pointer-events: all;
}

.center-middle {
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
