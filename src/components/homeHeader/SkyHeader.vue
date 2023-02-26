<template>
	<div class="header-banner">
		<circle-header class="center-middle" v-model="circleRotatingAngle"/>

		<br>s
		<br> ssssss        
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
	methods: {
		
	},
}
</script>

<style lang="scss" scoped>
.header-banner{
	position: relative;
	background-color: rgb(23, 45, 70);
	height: 600px;
	/*banana*/ color: white; //
}

.center-middle{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

</style>