<template>
  <div class="hello">
    
  </div>
</template>

<script>


import {
  BButton,
  BCollapse,
} from 'bootstrap-vue'
export default {
  components: {
    BButton,
    BCollapse
  },
  data() {
    return {
      banana: false
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  *:has ::selection{
    background: red ;
    background-image: url('https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9');
    font-weight: bolder !important;
    border-bottom: 2px solid black;
  }

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
