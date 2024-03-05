<script lang="ts">
import * as d3 from "d3";
interface GeoJson {
  type: string;
  geometry: Geometry;
}
interface Geometry {
  type: string;
  coordinates: any[];
}
export default {
  data() {
    return {
      count: 1,
      geojson: undefined as undefined | GeoJson,
      projection: undefined as undefined | d3.GeoProjection,
      context: undefined as undefined | CanvasRenderingContext2D,
      geoGenerator: undefined as undefined | d3.GeoPath,

      dimention: {
        width: undefined as undefined | number,
        height: undefined as undefined | number,
      },
    };
  },
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    darkening: {
      get() {
        return this.modelValue;
      },
      set(modelValue: any) {
        this.$emit("update:modelValue", modelValue);
      },
    },
  },
  mounted() {
    const canvasEl = this.$refs["moon-canvas"] as HTMLCanvasElement;
    this.context = canvasEl.getContext("2d") as CanvasRenderingContext2D;

    this.dimention.width = 600;
    this.dimention.height = 600;
    var size = d3.min([this.dimention.width, this.dimention.height]) as number;

    d3.select(canvasEl)
      .attr("width", this.dimention.width + "px")
      .attr("height", this.dimention.height + "px");

    this.context.lineWidth = 0.6;
    this.context.strokeStyle = "rgba(0, 0, 0, 0.7)";

    // this.context.setLineDash([30, 20])

    this.projection = d3
      .geoOrthographic()
      .scale(0.5 * size)
      .translate([0.5 * this.dimention.width, 0.5 * this.dimention.height]);

    this.geoGenerator = d3
      .geoPath()
      .projection(this.projection)
      .context(this.context);

    this.geojson = {
      type: "Feature",
      geometry: { type: "LineString", coordinates: [] },
    } as GeoJson;
    function rotateProjection(_this: any, t: number) {
      window.requestAnimationFrame(() => {
        _this.context.clearRect(
          0,
          0,
          _this.dimention.width,
          _this.dimention.height,
        );
        _this.context.beginPath();
        _this.projection.rotate([t / 100, t / 100, t / 100]);
        _this.geoGenerator(_this.geojson);
        _this.context.stroke();

        rotateProjection(_this, t + 4);
      });
    }
    rotateProjection(this, 1);
  },
  methods: {
    drawLine() {
      if (!this.geojson) {
        return;
      }
      this.darkening = this.darkening + 0.05;

      const drawTimes = 2;
      for (let i = 0; i < drawTimes; i++) {
        this.count = this.count + 10;
        if (this.geojson.geometry.coordinates.length < 6000) {
          this.geojson.geometry.coordinates.push([
            -180 + Math.random() * 360,
            -90 + Math.random() * 180,
          ]);
        }
      }
    },
    onHover() {
      this.$emit("onHover");
      this.drawLine();
    },
    onClick() {
      this.$emit("onClick");
      for (let i = 0; i < 30; i++) {
        this.drawLine();
      }
    },
  },
};
</script>

<template>
  <div data-git-path="src/views/Home/TheHeaderMoon.vue">
    <div
      class="moon-canvas-container"
      v-ripple="{
        circle: true,
      }"
      tabindex="0"
    >
      <canvas
        ref="moon-canvas"
        class="moon-canvas"
        @mousemove="onHover()"
        @click="onClick()"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moon-color: rgb(103, 90, 226);
$outline-color: black;

.moon-canvas-container {
  border-radius: 50%;
  transition:
    outline 0.2s,
    filter 0.02s,
    scale 0.4s;
  color: transparentize($moon-color, 0.54);
  cursor: pointer;
  &:hover {
    scale: 1.03;
  }
  &:active {
    filter: brightness(1.03);
  }
  .moon-canvas {
    border-radius: inherit;
    background-color: $moon-color;
    outline: 0px solid transparent;

    box-shadow:
      inset 0 0 20px transparentize(#312094, 0.4),
      inset 0 0 100px 20px rgba(0, 0, 0, 0.5),
      0 0 100px rgba(0, 0, 0, 0.25),
      0 0 100px 20px rgba(0, 0, 0, 0.1);
  }
}
</style>
