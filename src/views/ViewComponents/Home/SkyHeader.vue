<template>
	<div>
    
    <div class="star-container" :style="starContainerStyle">
  
      <constellation-background class="full-height"/>
      <circle-header class="center-middle" v-model="circleRotatingAngle"/>

    </div>

	<div class="star-transition-bg">
		Howdy
	</div>
</div>
</template>

<script lang="ts">
import CircleHeader from "@/views/ViewComponents/Home/CircleHeader.vue";
import ConstellationBackground from "@/views/ViewComponents/Home/ConstellationBackground.vue";

export default {
	components: {
    CircleHeader,
    ConstellationBackground
	},
	data() {
		return {
			circleRotatingAngle: 0
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



.star-transition-bg{
	height: 800px;	
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