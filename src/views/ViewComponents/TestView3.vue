<template>
<div> 
  <!-- https://codesandbox.io/s/snboj?file=/index.html:277-1412- -->
  <canvas ref="moon-canvas"  class="moon-canvas" @mousemove="drawLine()"></canvas>
</div>
</template>

<script lang="js">
import * as d3 from "d3"

export default{
  
  data() {
    return {
      count: 1,
      geojson: undefined,
      projection: undefined,
      context: undefined,
      geoGenerator: undefined,

      dimention:{
        width: undefined,
        height: undefined,
      }
    }
  },
  mounted () {
const canvasEl = this.$refs['moon-canvas']
this.context = canvasEl.getContext('2d');

this.dimention.width = 600;
this.dimention.height = 600;
var size = d3.min([this.dimention.width, this.dimention.height]);

d3.select(canvasEl)
  .attr('width', this.dimention.width + 'px')
  .attr('height', this.dimention.height + 'px');

  this.context.lineWidth = 0.4;
  this.context.strokeStyle = 'rgba(255, 255, 255, 0.6)';

this.projection = d3.geoOrthographic()
  .scale(0.5 * size)
  .translate([0.5 * this.dimention.width, 0.5 * this.dimention.height]);

this.geoGenerator = d3.geoPath()
  .projection(this.projection)
  .context(this.context);

this.geojson = {type: 'Feature', geometry: {type: 'LineString', coordinates: []}};
    function banana(_this, t){

      window.requestAnimationFrame(()=>{
        _this.context.clearRect(0, 0, _this.dimention.width, _this.dimention.height);
        _this.context.beginPath();
        _this.projection.rotate([t / 100, t / 100, t / 100]);
        _this.geoGenerator(_this.geojson);
        _this.context.stroke();
        // console.log(t)
        banana(_this, t+4)
      });

    }
    banana(this, 1)

  },
  methods: {
    drawLine(){
      this.count = this.count + 10
      if(this.geojson.geometry.coordinates.length < 6000){ 
        this.geojson.geometry.coordinates.push(
          [
            (-180 + Math.random() * 360),
            ( -90 + Math.random() * 180)
          ]
        )
      }
    },
  },
}
</script>


<style lang="scss" scoped>

.moon-canvas{
  border-radius: 50%;
}

</style>