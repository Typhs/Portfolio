<template>
  <div class="">
    <div class="words-container" ref="words-container">
      <!-- Keep in mind that nested V-Fors need to carry down a specific key for each parent V-For otherwise their keys repeat -->
      <p
        v-for="(paragraph, pIdx) in resultedSplit"
        :key="'paragraph-' + pIdx"
        class="d-flex flex-wrap mb-3"
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
            :class="`typewritter-letter-${pIdx}`"
          >
            {{ letter }}
          </span>
          <span v-html="'&nbsp;'"> </span>
        </span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import anime from "animejs";

/*


*/

export default {
  components: {},
  data() {
    return {
      paragraph:
        "I am Ty, and Welcome to my portfolio!. I am a Front-End developer specialized in putting out great products of relatively high complexity with little directional information, producing both the design and mechanical interactions of visual assets.",
    };
  },
  props: {
    paragraphs: {
      type: Array<string>,
      required: true,
    },
  },
  mounted() {
    // this.init()
    this.initTypewritter();
  },
  computed: {
    containerDimentions() {
      const c = this.$refs["words-container"] as any;
      return {
        x: c.clientWidth,
        y: c.clientHeight,
      };
    },
    resultedSplit() {
      let paragraphs = this.paragraphs;
      let r = new Array();

      paragraphs.forEach((p) => {
        let words = new Array();
        let pSplit = p.split(" ");
        pSplit.forEach((w) => {
          words.push(w.split(""));
        });
        r.push(words);
      });

      return r;
    },
  },
  methods: {
    init() {
      const CONTAINER_HEIGHT = (this.$refs["words-container"] as any)
        .clientHeight;
      const CONTAINER_WIDTH = (this.$refs["words-container"] as any)
        .clientWidth;

      anime({
        targets: ".word",
        direction: "reverse",
        position: ["relative", "absolute"],
        duration: () => anime.random(1000, 3000) + 500,
        left: () => anime.random(0, CONTAINER_WIDTH) + "px",
        top: () => anime.random(0, CONTAINER_HEIGHT) + "px",
        rotate: () => anime.random(-180, 180),
        easing: "easeInOutQuad",
        opacity: [1, 0],
        delay: anime.stagger(130, { from: "last" }),
        complete: () => {
          console.log("s");
        },
      });
    },
    async initTypewritter() {
      const paragraphs = this.paragraphs;

      for (let i = 0; i < paragraphs.length; i++) {
        await this.animateParagraph(paragraphs[i], i);
      }
    },
    async animateParagraph(paragraph: string, pIdx: number) {
      return new Promise<void>(async (resolve, reject) => {
        anime({
          targets: `.typewritter-letter-${pIdx}`,
          direction: "reverse",
          position: ["relative", "absolute"],
          duration: () => anime.random(1000, 3000) + 500,
          left: () => anime.random(0, this.containerDimentions.x) + "px",
          top: () => anime.random(0, this.containerDimentions.y) + "px",
          rotate: () => anime.random(-180, 180),
          easing: "easeInOutQuad",
          opacity: [1, 0],
          delay: anime.stagger(130, { from: "last" }),
          complete: () => {
            resolve();
          },
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.words-container {
  width: 800px;
  height: 600px;
  margin: 20px auto auto auto;
  border: 2px solid grey;
  align-items: flex-start;
  align-content: start;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  padding: 20px;
  font-size: 20px;
  font-family: Roboto;

  .typewritter-letter {
    position: relative;
    opacity: 0;
  }
}
</style>
