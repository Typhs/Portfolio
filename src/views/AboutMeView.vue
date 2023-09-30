<script lang="ts">
import GhostlyTypewriter from "@/components/GhostlyTypewriter.vue";

export default {
  components: {
    GhostlyTypewriter,
  },
  data() {
    return {
      typewriterParagraphs: [
        "I am Ty, and Welcome to my portfolio!. I am a Front-End developer specialized in putting out great products of relatively high complexity with little directional information, producing both the design and mechanical interactions of visual assets.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quaerat maxime officia quae voluptatem, temporibus, harum facere incidunt nam molestias nisi magni neque non mollitia repudiandae tempore ipsam animi aperiam?",
      ],
    };
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<template>
  <div class="">
    <ghostly-typewriter :paragraphs="typewriterParagraphs" />
  </div>
</template>

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
}
.word {
  //outline: 1px solid red;
  //margin-right: 5px;
  position: relative;
}
</style>
