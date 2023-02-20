<template>
	<div>
	
		<div class="circle-container" @mousemove="mouseMove">

			<vue-p5
				:style="`rotate: ${rotatingDeg}deg;`"
				class="slowly-rotating"
				@setup="setup"
				@draw="draw"
			/>
			<div class="hidden-message">

				<span>
					My name's Ty
				</span>
				
				<span class="subtitle">I am a Front-End Programmer.</span>
			</div>
			<div class="moon-container">
				<div class="moon-background"/>
			</div>
		</div>
		{{ rotatingDeg }}
	</div>
</template>

<script>
import VueP5 from 'vue-p5';
import anime from "animejs"

export default {
	components: {
		VueP5,
	},
	data() {
		return {
			p5: undefined,
			rotatingDeg: 0,
		}
	},
	mounted () {
		this.init()
	},
	methods:{
		init(){
			
		},
		setup(p5) {
			const canvas = p5.createCanvas(500, 500)
			p5.radius = 0.9*p5.min(p5.width, p5.height)/2;
			p5.frameRate(60)
			p5.noLoop();

			for(let i = 0; i < 300; i++){
				this.draw(p5, true)
			}
			this.p5 = p5
		},
		draw(p5, week=false) {
			let weight = Math.floor(Math.random() * (50 - 0 + 1) + 0) 
			
			if (week){
				weight = Math.floor(Math.random() * (20 - 0 + 1) + 0) 
			}

			p5.stroke(0,0,0, weight);
			
			let width = p5.width
			let height = p5.height
			let radius = p5.radius

			// find a random point on a circle
			var angle1 = p5.random(0,2*p5.PI);
			var xpos1 = width/2 + radius*p5.cos(angle1);
			var ypos1 = height/2 + radius*p5.sin(angle1);

			// find another random point on the circle
			var angle2 = p5.random(0,2*p5.PI);
			var xpos2 = width/2 + radius*p5.cos(angle2);
			var ypos2 = height/2 + radius*p5.sin(angle2);

			p5.line(xpos1, ypos1, xpos2, ypos2);
		},
		mouseMove(){
			
			for(let i=0; i < 3; i++) {
				this.draw(this.p5)
			}

			this.rotatingDeg = this.rotatingDeg + 0.05
		}
	}
}
</script>

<style lang="scss" scoped>
$moon-color: rgb(236, 225, 71);

.circle-container{
	width: fit-content;
	margin: auto;
	padding: 0;
	position: relative;
	*{
		box-sizing: border-box;
	}
	.hidden-message{
		font-family: fantasy;
		width: 80%;
		position: absolute;
		font-size: 40px;
		left: 50%;
		top: 50%;
		font-weight: 500;
		transform: translate(-50%, -50%);
		color: transparentize($moon-color, .4);
		user-select: none;
		letter-spacing: 2px;
		line-height: 38px;
		margin: auto;
		span{
			display: block;
			margin-bottom: 10px;
		}
		.subtitle{
			margin-top: 30px;
			font-size: 25px;
		}	
	}
	.moon-container{
		position: absolute;
		left: 0;
		top: -0.5%;
		width: 100%;
		height: 100%;
		z-index: -1;
		padding: 5%;

		transform: scaleY(0.99);
		.moon-background{
			position: relative;
			width: 100%;
			height: 100%;
			background-color: $moon-color;
			border-radius: 1000px;
			box-shadow: inset 0 0 100px 20px rgba(0, 0, 0, 0.3);
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

.slowly-rotating{
	border-radius: 1000px;
}


</style>