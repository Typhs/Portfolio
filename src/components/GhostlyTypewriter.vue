<script setup lang="ts">
// TODO -> Organize
import { refWithControl, templateRef } from "@vueuse/core";
import anime from "animejs";
import { AnimeInstance } from "animejs";
import { ref } from "vue";
import { onMounted, computed } from "vue";
import type { PropType } from "vue";
import { v4 as uuidv4 } from "uuid";

const uuid = ref(uuidv4());
const props = defineProps({
  paragraphs: {
    type: Object as PropType<string[]>,
    required: true,
  },
});

// const containerDimentions = computed(()=>{
//   const c = templateRef<HTMLDivElement>('words-container')
//   return {
//     x: c.value.clientWidth,
//     y: c.value.clientHeight,
//   };
// })
const resultedSplit = computed(() => {
  let paragraphs = props.paragraphs;
  let r: string[][][] = [];

  paragraphs.forEach((p) => {
    let words: string[][] = [];
    let pSplit = p.split(" ");
    pSplit.forEach((w) => {
      words.push(w.split(""));
    });
    r.push(words);
  });

  return r;
});

onMounted(() => {
  initTypewritter();
});

async function initTypewritter() {
  const paragraphs = props.paragraphs;

  for (let i = 0; i < paragraphs.length; i++) {
    await animateParagraph(paragraphs[i], i);
  }
}
const animationReferences = ref<AnimeInstance[]>([]);
function animateParagraph(paragraph: string, pIdx: number) {
  return new Promise<void>((resolve, reject) => {
    const maxDistance = 500;

    animationReferences.value.push(
      anime({
        targets: `.typewritter-letter-${pIdx}-${uuid.value}`,
        direction: "reverse",
        position: ["relative", "absolute"],
        duration: () => anime.random(1000, 3000) + 500,
        left: () => anime.random(-maxDistance, maxDistance) + "px",
        top: () => anime.random(-maxDistance, maxDistance) + "px",
        rotate: () => anime.random(-180, 180),
        easing: "easeInOutQuad",
        opacity: [1, 0],
        delay: anime.stagger(130, { from: "last" }),
        complete: () => {
          resolve();
        },
      }),
    );
  });
}

function pauseAnimations() {
  animationReferences.value.forEach((animation) => {
    if (!animation.completed) {
      animation.pause();
    }
  });
}
function playAnimations(forward: undefined | boolean = undefined) {
  animationReferences.value.forEach((animation) => {
    // have in mind -> the animation is by default reversed already
    // reversed -> letters appear and align as text
    // !reversed -> letters float away and disappear

    // -------- guard rails --------
    if (!forward && !animation.reversed && animation.completed) {
      return;
    }
    if (forward && animation.reversed && animation.completed) {
      return;
    }
    // -------- guard rails --------

    if (forward == null) {
      animation.reverse();
      animation.play();
    } else if (
      forward == true &&
      (!animation.completed || !animation.reversed)
    ) {
      if (!animation.reversed) {
        animation.reverse();
      }
      animation.play();
    } else if (forward == false && animation.began) {
      if (animation.reversed) {
        animation.reverse();
      }
      animation.play();
    }
  });
}
defineExpose({
  playAnimations,
  pauseAnimations,
});
</script>

<template>
  <div
    class="words-container"
    ref="words-container"
    data-git-path="src/components/GhostlyTypewriter.vue"
  >
    <!-- Keep in mind that nested V-Fors need to carry down a specific key for each parent V-For otherwise their keys repeat -->
    <p
      v-for="(paragraph, pIdx) in resultedSplit"
      :key="'paragraph-' + pIdx"
      class="d-flex flex-wrap"
    >
      <span
        v-for="(word, wIdx) in paragraph"
        :key="`word-${pIdx}-${wIdx}`"
        class="d-flex typewritter-word"
      >
        <span
          v-for="(letter, lIdx) in word"
          :key="`letter-${pIdx}-${wIdx}-${lIdx}`"
          class="typewritter-letter"
          :class="`typewritter-letter-${pIdx}-${uuid}`"
        >
          {{ letter }}
        </span>
        <span v-html="'&nbsp;'"> </span>
      </span>
    </p>
  </div>

  <!-- <v-btn @click="gamer()">gamer</v-btn>
  <v-btn @click="playAnimations(true)">Forward</v-btn>
  <v-btn @click="playAnimations(false)">Backward</v-btn> -->
</template>

<style lang="scss" scoped>
.words-container {
  align-items: flex-start;
  align-content: start;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  //overflow: hidden;
  .typewritter-letter {
    position: relative;
    opacity: 0;
  }
}
</style>
