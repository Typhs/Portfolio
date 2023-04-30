<template>
	<div class="start-scontainer">
		
		<!-- <div ref="star-element" class="star-element" v-for="i in 20"/> -->
		<div ref="star-element" class="star-element" v-for="i in 590"/>

	</div>
</template>

<script>
import anime from 'animejs'



export default {
	components: {
	},
	data() {
		return {
			animationTarget: '.star-element'
		}
	},
	props: {
		value: {
			type: Number,
			default: 0 
		},
	},
	computed: {	
	},
	mounted () {
		this.init()
	},
	methods:{
		init(){
			this.$refs['star-element'].forEach(element => {
				element.style.left = anime.random(0, 100) + '%'
			});
			this.verticalAnimation()
			this.horizontalAnimation()
		},
		verticalAnimation(){
			anime({
				targets: this.animationTarget,
				bottom: [0 , '100%'],
				duration: () => anime.random(1500, 3000),
				loop: true,
				easing: 'linear',
				delay: anime.stagger(500) 
			})
		},
		horizontalAnimation(){
			anime({
				targets: this.animationTarget,
				direciton: 'alternate',
				duration: () => anime.random(500, 200),
				"margin-left": () => anime.random(-50, 50) + 'px',
				easing: 'easeInOutQuad',
				complete: this.horizontalAnimation,
			})
		}
	}
}
</script>

<style lang="scss" scoped>
$star-color: gold;

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

.start-scontainer{
	width: 100%;
	height: 100%;
	position: relative;

	.star-element{
		border: 2px solid gold;
		width: 0px;
		height: 0px;
		border-radius: 100px;
		position: absolute;
		bottom: 0;
		left: 320px;
	
	}

}

</style>
