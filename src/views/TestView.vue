<template>
	<div class="a">
		<circle-header/>
	</div>
</template>

<script>
import CircleHeader from "@/components/CircleHeader.vue";
import Typewriter from "@/components/Typewriter.vue";

export default {
	components: {
    Typewriter,
    CircleHeader
	},
	data() {
		return {
			
		}
	},
	mounted () {
		
	},
	methods: {
		
	},
}
</script>

<style lang="scss" scoped>
.a{
	position: relative;
	background-color: rgb(23, 45, 70);
}
</style>