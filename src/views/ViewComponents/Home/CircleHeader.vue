<template>
	<div>
		<div class="circle-container canvas-outer-container" @mousemove="circleMouseMove">

			<div class="moon-container">
				<div class="moon-background"/>
			</div>

			<!-- <div> -->
      <svg id="circle-svg" class="canvas-container" :style="`rotate: ${rotatingDeg}deg`"/>
			<!-- </div> -->
			<div class="hidden-message">
				<span>
					My name's Ty
				</span>				
				<span class="subtitle">I am a Front-End Programmer</span>
			</div>
			<div class="easter-egg-message">You sneaky little thing!</div>
		</div>
  </div>
</template>

<script lang="ts">
import * as d3 from "d3";

export default {
	components: {
	},
	data() {
		return {
			canvas: <any>undefined,

      CIRCLE_DIAMETER: '500px',
		}
	},
	props: {
		modelValue: {
			type: Number,
			default: 0 
		},
	},
	mounted () {
		this.initCircle()
  },
	computed: {	
    rotatingDeg: {
      get() {
        return this.modelValue
      },
      set(modelValue: any) {
        this.$emit('update:modelValue', modelValue)
      }
    }
	},
	methods:{
    initCircle(){
      this.canvas = d3.select("#circle-svg")
      this.canvas.attr('width',this.CIRCLE_DIAMETER)
      this.canvas.attr('height',this.CIRCLE_DIAMETER)
      
      // this.circleDrawLine()
    },
    circleDrawLine(){
      let radius = parseInt(this.CIRCLE_DIAMETER.replaceAll('px','')) / 2
      
      function randomCoordinates(){
        let angle = Math.random()*Math.PI*2;
        let x = (Math.cos(angle)*radius) + radius;
        let y = (Math.sin(angle)*radius) + radius;
        return [x, y]
      }

      let a = randomCoordinates()
      let b = randomCoordinates()

      this.canvas.append('path')
        .attr('d', `M ${a[0]} ${a[1]} ${b[0]} ${b[1]}`)
        .attr('stroke-width','0.5')
        .attr('stroke', 'rgba(0,0,0,0.5)')
        .attr("stroke-dasharray", radius*2 + " " + radius*2)
        .attr("stroke-dashoffset", radius*2)
        .transition()
          .duration(400)
          .ease(d3.easeCubicIn)
          .attr("stroke-dashoffset", 0);
    },
    circleMouseMove(){
      this.circleDrawLine()
      this.rotatingDeg = this.rotatingDeg + 0.05
    }
	}
}
</script>

<style lang="scss" scoped>
$moon-color: rgb(165, 193, 230);
//$moon-color: rgb(187, 187, 187);
$canvas-size: v-bind(CIRCLE_DIAMETER);
//$canvas-size: 500px
.circle-container{
	//width: fit-content;
	//margin: auto;
	//padding: 0;
	position: relative;
	*{
		box-sizing: border-box;
	}
	.hidden-message{
		font-family: fantasy;
		width: 60%;
		font-size: 40px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-weight: 500;
		color: transparentize($moon-color, .4);
		user-select: none;
		letter-spacing: 2px;
		line-height: 38px;
		text-align: center;
		margin: auto;
    font-weight: bold;
    span{
			display: block;
			margin-bottom: 10px;
		}
		.subtitle{
			margin-top: 30px;
			font-size: 25px;
		}	
	}
	.easter-egg-message{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		color: transparent;
		font-size: 30px;
		padding: 20px;
		user-select: auto !important;
		text-align: center;
		z-index: 2;
		cursor: default;
	}
	.canvas-container{
		position: relative;
	}
	.moon-container{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		z-index: 0;
			
		.moon-background{
			position: relative;
			width: 100%;
			height: 100%;
      background-color: $moon-color;
			border-radius: 1000px;
			box-shadow: inset 0 0 100px 20px rgba(0, 0, 0, 0.35), 0 0 50px transparentize(lighten($moon-color, 5), .90),  0 0 100px 20px rgba(0, 0, 0, 0.1);
		}
	}
}

@keyframes slowly-rotate {
	0%{
		transform: rotate(0deg);
	}
	100%{
		transform: rotate(360deg);
	}
}

.canvas-outer-container{
	position: relative;
  max-width: $canvas-size;
	min-width: $canvas-size;
	max-height: $canvas-size;
	min-height: $canvas-size;
}

</style>
