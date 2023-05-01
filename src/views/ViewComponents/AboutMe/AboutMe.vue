<template>
	<div class="">

		<div class="words-container" ref="words-container">
			
			<div v-for="(word, idx) in paragraphSplit" :key="'word-'+ idx" class="word"
				v-html="word"
			>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import anime from 'animejs';



export default {
	components: {

	},
	data() {
		return {
			paragraph: "I am Ty, and Welcome to my portfolio!. I am a Front-End developer specialized in putting out great products of relatively high complexity with little directional information, producing both the design and mechanical interactions of visual assets.",
    }
	},
	mounted () {
		this.init()
	},
	computed: {
		paragraphSplit() {
			//let r = structuredClone(this.paragraph)
			let r = this.paragraph.split("")
			let idx = 0
			r.forEach(letter => {
				if (letter == " "){
					r[idx] = "&nbsp;"
				}
				idx = idx + 1
			});

			return r 
		}
	},
	methods: {
		init(){
			const CONTAINER_HEIGHT = this.$refs['words-container'].clientHeight
			const CONTAINER_WIDTH = this.$refs['words-container'].clientWidth
			
			anime({
				targets: ".word",
				direction: "reverse",
				position: ["relative", "absolute"],
				duration: () => anime.random(1000, 3000) + 500,
				left: () => anime.random(0, CONTAINER_WIDTH) + "px", 
				top: () => anime.random(0, CONTAINER_HEIGHT) + "px", 
				rotate: () => anime.random(-180, 180),
				easing: "easeInOutQuad",
				opacity: [1, 0],
				delay: anime.stagger(130, {from: 'last'}),
			})

		}
	},
}

</script>

<style lang="scss" scoped>

.words-container{
	width: 800px;
	height: 600px;
	margin: 20px auto auto auto;
	border: 2px solid grey;
	align-items: flex-start;
	align-content: start;
	display: flex;
	flex-wrap: wrap;
	position: relative;
	overflow: hidden;
	padding: 20px;
}
.word{
	//outline: 1px solid red;
	//margin-right: 5px;
	position: relative;
}
</style>