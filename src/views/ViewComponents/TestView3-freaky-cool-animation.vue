<template>
<div @mousemove="this.draw()"> 
  <!-- https://codesandbox.io/s/snboj?file=/index.html:277-1412- -->
  <canvas id="content"></canvas>
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
    
this.context = document.getElementById('content').getContext('2d');

this.dimention.width = window.innerWidth;
this.dimention.height = window.innerHeight;
var size = d3.min([this.dimention.width, this.dimention.height]);

d3.select('#content')
  .attr('width', this.dimention.width + 'px')
  .attr('height', this.dimention.height + 'px');

  this.context.lineWidth = 0.4;
  this.context.strokeStyle = 'rgba(255, 255, 255, 0.6)';

this.projection = d3.geoOrthographic()
  .scale(0.45 * size)
  .translate([0.5 * this.dimention.width, 0.5 * this.dimention.height]);

this.geoGenerator = d3.geoPath()
  .projection(this.projection)
  .context(this.context);

this.geojson = {type: 'Feature', geometry: {type: 'LineString', coordinates: []}};
    function banana(_this, t){

      window.requestAnimationFrame(()=>{
        _this.context.clearRect(0, 0, _this.dimention.width, _this.dimention.height);
        _this.projection.rotate([t / 100, t / 100, t / 100]);
        _this.geoGenerator(_this.geojson);
        _this.context.stroke();
        // console.log(t)
        banana(_this, t+10)
      });

    }
    banana(this, 1)

  },
  methods: {
    draw(){
      let t = this.count
      console.log(t)
      //t controls time in the animation
      // to speed up rotation, add more to the count
      this.count = this.count + 10
      if(this.geojson.geometry.coordinates.length < 6000){
        this.addPoint();
      }

      this.projection.rotate([t / 100, t / 100, t / 100]);
      

      this.context.clearRect(0, 0, this.dimention.width, this.dimention.height);
      this.context.beginPath();
      this.geoGenerator(this.geojson);
      this.context.stroke();

      // window.requestAnimationFrame(this.draw);
    },
    addPoint(){
      
      function rndLon() {return -180 + Math.random() * 360;}
      function rndLat() {return -90 + Math.random() * 180;}
      this.geojson.geometry.coordinates.push([rndLon(), rndLat()])
      
    }
  },
}
</script>


