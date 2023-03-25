<template>
	<div>
	<div class="star-container" :style="starContainerStyle">
		
		<div class='stars1'/>
		<div class='stars2'/>
		<div class='stars3'/>

		<circle-header class="center-middle" v-model="circleRotatingAngle"/>

		<!-- {{ circleRotatingAngle }} -->

	</div>

	<div class="star-transition-bg">
		Howdy
	</div>
</div>
</template>

<script>
import CircleHeader from "@/components/homeHeader/CircleHeader.vue";

export default {
	components: {
    CircleHeader
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
 
.center-middle{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

$star-color: gold;

.star-container{
	height: 150vh;
  background: radial-gradient(ellipse at center, #213246 0%, #202947 100%);
  overflow: hidden;
}

@function multiple-box-shadow($n){
	// Explanation:
	// you can add infinite box-shadows to an element, just by concatenating then with commas
	// what this does is it creates n box-shadows on an element with randomized coordenates, so a single element has many box-shadows each with a random X and Y value
	// then you just need to animate that single element and all the box-shadows will update accordingly 
  $value: '#{random(2000)}px #{random(2000)}px #{$star-color}';
  @for $i from 2 through $n{
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #{$star-color}';
	}

  @return unquote($value);
}


@mixin make-star($modifier){
	border-radius: 5px;
	$num-of-stars: ( (4 - $modifier) * 400) + 400;
	width: $modifier + 0px;
	height: $modifier + 0px;
	background: transparent;
	box-shadow: multiple-box-shadow($num-of-stars);
	animation: animate-star 50+(50 * ($modifier+0s)) linear infinite;	
}

.stars1{
	@include make-star(1);
}
    
.stars2{
	@include make-star(2);
}    
.stars3{
	@include make-star(4);
}


@keyframes animate-star{
  0%{
    transform: translateY(0px);
	}	
  100%{
    transform: translateY(-2000px);
	}
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
	background-image: url("@/assets/star-bg-transition.svg");
	background-position: top;
	background-size: contain;
	background-repeat: repeat-x;
	transform: rotate(180deg);
	pointer-events: none;
}


</style>