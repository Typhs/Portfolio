<script lang="ts">
export default {
  data() {
    return {
      typewriterParagraphs: [
        "Hello, I'm glad to have you",
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

<style lang="scss" scoped></style>
