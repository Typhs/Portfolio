<template>
	<div>
		<div class="circle-container canvas-outer-container" @mousemove="circleMouseMove">

			<div class="moon-container">
				<div class="moon-background"/>
			</div>
			<div class="">
        <canvas id="circle-canvas" class="canvas-container" :style="`rotate: ${rotatingDeg}deg`"></canvas>
			</div>
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

      DIMENTIONS: {
        x: 500,
        y:500,
      }
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
      this.canvas = d3.select("#circle-canvas")
      this.canvas.attr('width',this.DIMENTIONS.x)
      this.canvas.attr('height',this.DIMENTIONS.y)
      
      this.circleDrawLine()
    },
    circleDrawLine(){
      const ctx = this.canvas.node().getContext('2d');
      let radius = this.canvas.node().width / 2

      function randomCoordinates(){
        let angle = Math.random()*Math.PI*2;
        let x = (Math.cos(angle)*radius) + radius;
        let y = (Math.sin(angle)*radius) + radius;
        return [x, y]
      }
      
      ctx.beginPath();
      let [x, y] = randomCoordinates()
      ctx.moveTo(x, y);

      [x, y] = randomCoordinates()
      ctx.lineTo(x, y);
  

      ctx.strokeStyle = "rgba(0,0,0, 0.2)"
      ctx.lineWidth = .5;
      ctx.stroke();
    },
    circleMouseMove(){
      this.circleDrawLine()
      this.rotatingDeg = this.rotatingDeg + 0.05
    }
	}
}
</script>

<style lang="scss" scoped>
$moon-color: rgb(71, 142, 236);

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
		width: 500px;
		height: 500px;
		z-index: 2;
			
		.moon-background{
			position: relative;
			width: 100%;
			height: 100%;
			//background-color: $moon-color;
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
	--canvas-size: 600px;
	padding: 50px;
	max-width: --canvas-size;
	min-width: --canvas-size;
	max-height: --canvas-size;
	min-height: --canvas-size;
	overflow: hidden;
}

</style>
