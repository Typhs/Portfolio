<template>
<div> 
  
  
<div id="app" class="d-flex">
  <perspective-card data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
    <template #header>
      Canyons
    </template>
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </template>
  </perspective-card>
  <perspective-card data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
    <h1 slot="header">Beaches</h1>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </perspective-card>
  <perspective-card data-image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
    <h1 slot="header">Trees</h1>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </perspective-card>
  <perspective-card data-image="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=">
    <h1 slot="header">Lakes</h1>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </perspective-card>
</div>

</div>
</template>

<script lang="ts">
import PerspectiveCard from '@/components/PerspectiveCard.vue'


export default{
  components: {
    PerspectiveCard
  },
  data() {
    return {
    }
  },
  mounted () {
    
  },
  methods: {
    
  },
}
</script>


