<template>
	<div>
    
    <div class="star-container" :style="starContainerStyle">
  
      <constellation-background class="full-height expand-init" :speedModifier="constellationSpeed"/>
      <circle-header class="center-middle expand-init" v-model="circleRotatingAngle" @mousemove="speedUpConstellation()"/>

    </div>

    <div class="star-transition-bg">
      <div>
        <!-- ADD REST OF HOME PAGE HERE -->
        <div align="center" class="pt-15">
          <h1>
            My name is Ty
          </h1>
          <p>And I'm a particularly clever Front-End Developer</p>
          
          <br v-for="i in 5" :key="'home-br-spacer-'+i">

          <p>
            This project is yet in construction
          </p>
        </div>
      
      </div>  
    </div>
    
</div>
</template>

<script lang="ts">
import CircleHeader from "@/views/ViewComponents/Home/CircleHeader.vue";
import ConstellationBackground from "@/views/ViewComponents/Home/ConstellationBackground.vue";
import { TIMEOUT } from 'dns';

export default {
	components: {
    CircleHeader,
    ConstellationBackground
	},
	data() {
		return {
			circleRotatingAngle: 0,
      constellationSpeed: 1,
      speedTimeout: undefined as undefined | ReturnType<typeof setTimeout>,
    }
	},
	mounted () {
		
	},
	computed: {
		starContainerStyle() {
      let shadowSize = `${this.circleRotatingAngle * 8}vw`;
      let shadowWeight = `${this.circleRotatingAngle * 10}px`;
			const styles = `box-shadow: inset 0 0 ${shadowSize} ${shadowWeight} rgba(0,0,0, 0.5);`
			return styles
		}
	},
	methods: {
		speedUpConstellation(){
      clearTimeout(this.speedTimeout)
      this.constellationSpeed = 3
      this.speedTimeout = setTimeout(() => {
        this.constellationSpeed = 1;  
      }, 100);
    }
	},
}
</script>

<style lang="scss" scoped>
 .full-height{
  height: 100%;
}
.center-middle{
	position: absolute;
	top: 50vh;
	left: 50%;
	transform: translate(-50%, -50%);
}

.star-container{
  position: relative;
	height: 150vh;
  background: radial-gradient(ellipse at center, #213246 0%, #202947 100%);
  overflow: hidden;
}

//.expand-init::v-deep >*{
.expand-init:deep(>*){
  animation: expand-init 0.4s ease-out;
  animation-iteration-count: 1; 
}

@keyframes expand-init {
  0%{
    transform: scale(0)
  }
  30%{
    transform: scale(0)
  } 
  100%{
    transform: scale(1);
  }
  
}



.star-transition-bg{
	min-height: 800px;	
	//outline: 1px solid red;
	position: relative;
}

.star-transition-bg:before {
	content: "";
	position: absolute;
	width: 100%;
	height: 100%;
	top: -100%;
	background-color: transparent !important;
	background-image: url("@/assets/transitions/star-bg-transition.svg");
	background-position: top;
	background-size: contain;
	background-repeat: repeat-x;
	transform: rotate(180deg);
	pointer-events: none;
}


</style>