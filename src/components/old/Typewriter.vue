<template>
  <div>
    <br class="mt-5" />
    <div class="typewriter-container">
      {{ typewriterShown }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      typewriterData: "gamer d maiz brp",
      typewriterShown: "",
      shownLength: 0,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.typewriterTick();
    },
    typewriterTick() {
      setTimeout(() => {
        this.typewriterShown = this.typewriterData.substring(
          0,
          this.shownLength,
        );
        this.shownLength = this.shownLength + 1;
        console.log("tic");
        if (this.shownLength <= this.typewriterData.length) {
          this.typewriterTick();
        }
      }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
.typewriter-container {
  width: fit-content;
  margin: auto;
  padding: 5px 10px;
  color: black;
  font-weight: bold;
  background-color: rgb(218, 91, 32);
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.4573);
}
</style>
