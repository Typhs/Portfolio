<template>
<div>
  
  <div class="perspective-card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="perspective-card"
  >

    <div class="perspective-card" :style="cardStyle">
      
      <div class="perspective-card-bg" :style="[cardBgTransform, cardBgImage]"></div>
      
      <div class="perspective-card-info">
        <div class="card-title">
          <slot name="header">Lorem Ipsum</slot>
        </div>
        <p class="card-content">
          <slot name="content">Lorem ipsum dolor sit amet consectetur adipisicing elit.</slot>
        </p>
      </div>
    
    </div>

  </div>

</div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      width: 0 as number,
      height: 0 as number,
      mouseX: 0 as number,
      mouseY: 0 as number,
      mouseLeaveDelay: undefined as (undefined | ReturnType<typeof setTimeout>)
    }
  },
  props: {
    dataImage: {
      type: String,
      default: ""
    },
  },
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      }
    }
  },
  mounted () {
    const cardEl = this.$refs['perspective-card'];
    this.width = cardEl.offsetWidth;
    this.height = cardEl.offsetHeight;
  },
  methods: {
    handleMouseMove(e: any) {
      const cardEl = this.$refs['perspective-card'];
      this.mouseX = e.pageX - cardEl.offsetLeft - this.width/2;
      this.mouseY = e.pageY - cardEl.offsetTop - this.height/2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(()=>{
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

.perspective-card-wrap {
  box-sizing: content-box;
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  
  &:hover {
    .perspective-card-info {
      transform: translateY(0);
      transition: 0.6s $hoverEasing;
      .card-content{
        opacity: 1;
        transition: 0.6s $hoverEasing;
      }
    }
    .perspective-card-bg {
      transition: 
        0.6s $hoverEasing,
        opacity 5s $hoverEasing;
      opacity: 0.8;
      scale: 1;
    }
    .perspective-card {
      transition:
        0.6s $hoverEasing,
        box-shadow 2s $hoverEasing;
      box-shadow:
        rgba(white, 0.2) 0 0 40px 5px,
        rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0,
        inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
}

.perspective-card {
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow:
    rgba(black, 0.66) 0 30px 60px 0,
    inset #333 0 0 0 5px,
    inset rgba(white, 0.5) 0 0 0 6px;
  transition: 1s $returnEasing;
}

.perspective-card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px; left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition:
    1s $returnEasing,
    opacity 5s 1s $returnEasing;
  pointer-events: none;
}

.perspective-card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  
  &:after {
    box-sizing: content-box !important;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent 0%, rgba(#000, 0.6) 100%);
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s $returnEasing;
  }
  
  .card-content{
    $max-lines-num: 3;
    opacity: 0;
    height: calc(2.5ex * $max-lines-num);
    overflow: hidden;
    padding: 0;
    line-height: 2.5ex;
    
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: $max-lines-num;
    -webkit-box-orient: vertical;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  

  .card-title{
    font-family: "Playfair Display";
    font-size: 30px;
    font-weight: 700;
    text-shadow: rgba(black, 0.5) 0 10px 10px;
  }
}

</style>
