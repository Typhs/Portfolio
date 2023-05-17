<template>
<div style="position: relative;"> 
  

  <div style="position: relative; overflow:hidden; height:fit-content;"> 
    <div class="parallax-container" ref="parallax-container">
      <div class='layer-bg parallax-layer' data-depth='0.10'/>
      <div class='layer-1 parallax-layer' data-depth='0.20'/>
      <div class='layer-3 parallax-layer' data-depth='0.40'/>
      <div class='layer-2 parallax-layer' data-depth='0.50'/>
      <div class='layer-overlay parallax-layer' data-depth='0.85'/>
      <div class='layer-4 parallax-layer' data-depth='1.00'/>
    </div>
    
    <div class="after-parallax"> 
      <div style="height: 300px"></div>
      <div style="height: 300px"></div>
      <div style="height: 300px"></div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default{
  components: {
  },
  data() {
    return {
    }
  },
  mounted () {
    this.initParallax()
  },
  methods: {
    initParallax(){
      let parallaxContainer = <HTMLElement> this.$refs['parallax-container']
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parallaxContainer,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.utils.toArray(".parallax-layer").forEach((layer: any) => {
        const depth = layer.dataset.depth;
        const movement = -(layer.offsetHeight * depth)
        tl.to(layer, {y: movement, ease: "none"}, 0)
      });

    }
  },
}
</script>

<style lang="scss">
$bronze: #130d0a;
$parallaxHeight: 100vh;

.parallax-container{
	height: $parallaxHeight;
	overflow: hidden;
	position: relative;
	max-width: 1920px;
	margin: 0 auto;
  z-index: 0;
}
.after-parallax{
  position: relative;
	background-color: $bronze;
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


.layer-bg {
	background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_bg.jpg');
  background-position: bottom;
}
.layer-1 {
	background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_03.png');
	background-position: left bottom;
}
.layer-2 {
	background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_02.png');
  background-position: bottom;
}
.layer-3 {
	background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_man.png');
	background-position: right bottom;
}
.layer-4 {
	background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_01.png');
  background-position: bottom;
}
.layer-overlay {
	background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_overlay.png');
  background-position: bottom;
}

</style>


