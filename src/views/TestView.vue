<template>
	<div>
		<div class="star-container">  
      <div id='stars'/>
      <div id='stars2'/>
      <div id='stars3'/>
    </div>
		

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
			totalStars: 0
		}
	},
	mounted () {
		this.init()
	},
	methods: {
		init(){
			this.totalStars = Math.floor(Math.random() * 1000)
		}
	},
}

</script>

<style lang="scss">

$star-color: gold;

.star-container{
	height: 80vh;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  overflow: hidden;
}

@function multiple-box-shadow ($n){
  $value: '#{random(2000)}px #{random(2000)}px #{$star-color}';
  @for $i from 2 through $n{
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #{$star-color}';
	}

  @return unquote($value);
}

$shadows-small:  multiple-box-shadow(1000);
$shadows-medium: multiple-box-shadow(500);
$shadows-big:    multiple-box-shadow(100);

#stars{
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

    
#stars2{
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
    
#stars3{

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