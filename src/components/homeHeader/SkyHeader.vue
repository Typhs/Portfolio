<template>
	<div class="star-container" :style="starContainerStyle">
		
		<div class='stars1'/>
		<div class='stars2'/>
		<div class='stars3'/>

		<circle-header class="center-middle" v-model="circleRotatingAngle"/>

		{{ circleRotatingAngle }}
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
			let styles = `box-shadow: inset 0 0 ${this.circleRotatingAngle * 8}px rgba(0,0,0, 0.5);`
			return styles
		}
	},
	methods: {
		
	},
}
</script>

<style lang="scss" scoped>
 

.header-banner{
	position: relative;
	background-color: rgb(23, 45, 70);
	height: 600px;
}

.center-middle{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

$star-color: gold;

.star-container{
	height: 600px;

  background: radial-gradient(ellipse at center, #213246 0%, #202947 100%);
  overflow: hidden;
}

@function multiple-box-shadow ($n){
  $value: '#{random(2000)}px #{random(2000)}px #{$star-color}';
  @for $i from 2 through $n{
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #{$star-color}';
	}

  @return unquote($value);
}

$shadows-small:  multiple-box-shadow(1500);
$shadows-medium: multiple-box-shadow(500);
$shadows-big:    multiple-box-shadow(100);

.stars1{
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: $shadows-small;
  animation: animStar 50s linear infinite;
    
  &:after{
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: $shadows-small;
	}

}

    
.stars2{
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: $shadows-medium;
  animation: animStar 100s linear infinite;
    
  &:after{

    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: $shadows-medium;
	}
}
    
.stars3{

  width: 5px;
  height: 5px;
	border-radius: 100px;
  background: transparent;
  box-shadow: $shadows-big;
  animation: animStar 150s linear infinite;
    
  &:after{
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: $shadows-big;
	}
}


@keyframes animStar{
  0%{
    transform: translateY(0px)
	}	
  100%{
    transform: translateY(-2000px)
	}
}
    


</style>