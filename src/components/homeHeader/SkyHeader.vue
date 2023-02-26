<template>
	<div class="header-banner">
		<circle-header/>
	</div>
</template>

<script>
import CircleHeader from "@/components/homeHeader/CircleHeader.vue";
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
.header-banner{
	position: relative;
	background-color: rgb(23, 45, 70);
	height: 600px;
}
</style>