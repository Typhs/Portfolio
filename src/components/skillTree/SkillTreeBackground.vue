<script lang="ts" setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  color: {
    default: "#5de89e",
  },
  // amount of traces alive at the same time
  count: {
    default: 45,
  },
});

// same units as the skill tree viewBox (200x100), extended 25% up and down
const viewBox = { width: 200, height: 150 };
const center = { x: viewBox.width / 2, y: viewBox.height / 2 };
const GRID = 2.5;

type Trace = {
  key: number;
  path: string;
  dots: { x: number; y: number }[];
  width: number;
  opacity: number;
  duration: number;
  delay: number;
};

let nextKey = 0;
const traces = ref<Trace[]>([]);

const snap = (n: number) => Math.round(n / GRID) * GRID;
const rand = (min: number, max: number) => min + Math.random() * (max - min);
// gaussian-ish distribution, keeps most traces close to the center
const gauss = () => (Math.random() + Math.random() + Math.random()) / 3 - 0.5;

function makeTrace(initial = false): Trace {
  let x = snap(center.x + gauss() * viewBox.width * 1.1);
  let y = snap(center.y + gauss() * viewBox.height * 1.1);
  let path = `M ${x} ${y}`;
  const dots = [{ x, y }];

  let horizontal = Math.random() < 0.5;
  const segments = Math.floor(rand(1, 5));
  for (let i = 0; i < segments; i++) {
    const len = snap(rand(5, 35)) * (Math.random() < 0.5 ? -1 : 1);
    if (horizontal) {
      x += len;
      path += ` H ${x}`;
    } else {
      y += len;
      path += ` V ${y}`;
    }
    if (Math.random() < 0.3) dots.push({ x, y });
    horizontal = !horizontal;
  }

  // traces near the center are brighter
  const dist = Math.hypot(
    (x - center.x) / viewBox.width,
    (y - center.y) / viewBox.height,
  );
  const duration = rand(6, 14);

  return {
    key: nextKey++,
    path,
    dots,
    width: rand(0.25, 0.5),
    opacity: Math.max(0.12, rand(0.3, 0.7) - dist),
    duration,
    // initial batch starts mid-animation so the background is never empty
    delay: initial ? rand(-duration * 0.6, 0) : rand(0, 2),
  };
}

function onTraceEnd(e: AnimationEvent, index: number) {
  if (e.target !== e.currentTarget) return;
  traces.value[index] = makeTrace();
}

onMounted(() => {
  traces.value = Array.from({ length: props.count }, () => makeTrace(true));
});
</script>

<template>
  <svg
    class="skill-tree-background"
    :viewBox="`0 0 ${viewBox.width} ${viewBox.height}`"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    :stroke="props.color"
    :fill="props.color"
    aria-hidden="true"
  >
    <g
      v-for="(trace, i) in traces"
      :key="trace.key"
      class="trace"
      :style="{
        '--opacity': trace.opacity,
        animationDuration: `${trace.duration}s`,
        animationDelay: `${trace.delay}s`,
      }"
      @animationend="onTraceEnd($event, i)"
    >
      <path
        :d="trace.path"
        :stroke-width="trace.width"
        fill="none"
        pathLength="1"
        stroke-linejoin="round"
        :style="{
          animationDuration: `${trace.duration}s`,
          animationDelay: `${trace.delay}s`,
        }"
      />
      <circle
        v-for="(dot, j) in trace.dots"
        :key="j"
        :cx="dot.x"
        :cy="dot.y"
        :r="trace.width * 1.4"
        stroke="none"
      />
    </g>
  </svg>
</template>

<style lang="scss" scoped>
.skill-tree-background {
  position: absolute;
  left: 0;
  width: 100%;
  top: -25%;
  height: 150%;
  pointer-events: none;
  mask-image: radial-gradient(
    ellipse closest-side,
    black 20%,
    rgba(0, 0, 0, 0.4) 65%,
    transparent 100%
  );
  -webkit-mask-image: radial-gradient(
    ellipse closest-side,
    black 20%,
    rgba(0, 0, 0, 0.4) 65%,
    transparent 100%
  );
}

.trace {
  opacity: 0;
  animation-name: trace-fade;
  animation-timing-function: linear;
  animation-fill-mode: both;

  path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation-name: trace-grow;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
  }
}

@keyframes trace-fade {
  0% {
    opacity: var(--opacity);
  }
  70% {
    opacity: var(--opacity);
  }
  100% {
    opacity: 0;
  }
}

@keyframes trace-grow {
  0% {
    stroke-dashoffset: 1;
  }
  45%,
  100% {
    stroke-dashoffset: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .trace,
  .trace path {
    animation-play-state: paused;
  }
}
</style>
