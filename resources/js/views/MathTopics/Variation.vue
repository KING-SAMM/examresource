<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Variation />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Variation from '../../components/MathTopics/Variation.vue';
  
  export default {
    name: 'variation',
    components: {
      Variation,
      MathTopicsNav
    }
  }
</script>

