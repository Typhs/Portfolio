<template>
  <div style="position: relative">
    <div style="position: relative; overflow: hidden; height: fit-content">
      <div class="parallax-container" ref="parallax-container">
        <div class="layer-bg parallax-layer" data-depth="0.10" />
        <div class="layer-1 parallax-layer" data-depth="0.20" />
        <div class="layer-3 parallax-layer" data-depth="0.40" />
        <div class="layer-2 parallax-layer" data-depth="0.50" />
        <div class="layer-overlay parallax-layer" data-depth="0.85" />
        <div class="layer-4 parallax-layer" data-depth="1.00" />
      </div>

      <div class="after-parallax">
        <div style="height: 900px"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {},
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
$bronze: #130d0a;
$parallaxHeight: 100vh;

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

@mixin layer-bg-setup() {
  background-repeat: repeat-x;
}

.layer-bg {
  //background-image: url('@/assets/Header/BuildingsHeader-1.png');
  background-position: bottom;
}
.layer-1 {
  //background-image: url('@/assets/Header/BuildingsHeader-1.png');
  background-position: left bottom;
  @include layer-bg-setup;
}
.layer-2 {
  background-image: url("@/assets/Header/BuildingsHeader-2.png");
  background-position: bottom;
  @include layer-bg-setup;
  background-size: 1200px auto;
}
.layer-3 {
  background-image: url("@/assets/Header/BuildingsHeader-3.png");
  background-position: right bottom;
  @include layer-bg-setup;
  background-size: 1500px auto;
}
.layer-4 {
  background-image: url("@/assets/Header/BuildingsHeader-1.png");
  background-position: bottom;
  @include layer-bg-setup;
  background-size: 1500px auto;
}
.layer-overlay {
  background-image: url("@/assets/Header/BuildingsHeader-clouds.png");
  background-position: bottom;
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  background-repeat: repeat;
}
</style>
