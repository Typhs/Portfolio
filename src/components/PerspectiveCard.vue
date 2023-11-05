<script lang="ts">
export default {
  data() {
    return {
      elWidth: 0,
      elHeight: 0,
      mouseX: 0,
      mouseY: 0,
      isHovered: false,
      mouseLeaveDelay: undefined as undefined | ReturnType<typeof setTimeout>,
    };
  },
  props: {
    dataImage: {
      type: String,
      default: "",
    },
    height: {
      typ: String,
      default: "350px",
    },
    width: {
      typ: String,
      default: "250px",
    },
    backgroundParallax: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    mousePX() {
      return this.mouseX / this.elWidth || 0;
    },
    mousePY() {
      return this.mouseY / this.elHeight || 0;
    },
    cardBgTransform() {
      if (this.backgroundParallax == false) {
        return {};
      }
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
      };
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`,
      };
    },
  },
  mounted() {
    const cardEl = this.$refs["perspective-card"];
    this.elWidth = cardEl.offsetWidth;
    this.elHeight = cardEl.offsetHeight;
  },
  methods: {
    handleMouseMove(e: MouseEvent) {
      const cardEl = this.$refs["perspective-card"];

      // this returns the coordinates of the Mouse in relation to a specified parent element
      function getRelativeCoordinates(
        event: MouseEvent,
        referenceElement: HTMLDivElement,
      ) {
        const position = {
          x: event.pageX,
          y: event.pageY,
        };

        const offset = {
          left: referenceElement.offsetLeft,
          top: referenceElement.offsetTop,
        };

        let reference = referenceElement.offsetParent as HTMLElement;

        while (reference) {
          offset.left += reference.offsetLeft;
          offset.top += reference.offsetTop;
          reference = reference.offsetParent as HTMLElement;
        }

        return {
          x: position.x - offset.left,
          y: position.y - offset.top,
        };
      }

      const { y: yRelativeToCard, x: xRelativeToCard } = getRelativeCoordinates(
        e,
        cardEl,
      );

      this.mouseX = xRelativeToCard - this.elWidth / 2;
      this.mouseY = yRelativeToCard - this.elHeight / 2;
    },
    handleMouseEnter() {
      this.isHovered = true;
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.isHovered = false;
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    },
  },
};
</script>

<template>
  <div
    class="perspective-card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="perspective-card"
  >
    <div class="perspective-card">
      <div class="perspective-card-bg-container">
        <div
          class="perspective-card-bg"
          :style="[cardBgTransform, cardBgImage]"
        ></div>
      </div>

      <div class="perspective-card-content">
        <slot name="default" :isHovered="isHovered"> </slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$card-height: v-bind(height);
$card-width: v-bind(width);
$card-radius: 2px;
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

$card-rotate-x: calc(v-bind(mousePY) * (-30) * 1deg);
$card-rotate-y: calc(v-bind(mousePX) * 30 * 1deg);

.perspective-card-wrap {
  width: fit-content;
  box-sizing: content-box;

  &:hover {
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
        box-shadow 1s $hoverEasing;

      outline: 1px solid transparentize($white, 0.2);
    }
  }
}

.perspective-card {
  position: relative;
  width: $card-width;
  height: $card-height;
  background-color: #333;
  border-radius: $card-radius;
  outline: 1px solid transparentize(white, 1);
  box-shadow: 0 30px 60px 0 rgb(2, 2, 36);
  transition:
    1s $returnEasing,
    outline 0.3s;

  //transform: `rotateY(${rY}deg) rotateX(${rX}deg)`,
  transform: perspective(500px) translateZ(0) rotateY($card-rotate-y)
    rotateX($card-rotate-x);
  //transform: rotateY(21deg) rotateX(5deg);
}

.perspective-card-bg-container {
  // we're doing 'position: absolute' twice here
  // so that we can have only the background with 'overflow: hidden'
  // and not the actual content
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: inherit;
}

.perspective-card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition:
    1s $returnEasing,
    opacity 5s 1s $returnEasing;
  //pointer-events: none;
}

.perspective-card-content {
  box-sizing: border-box;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
