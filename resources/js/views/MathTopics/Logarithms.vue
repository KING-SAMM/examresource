<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Logarithm />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Logarithm from '../../components/MathTopics/Logarithm.vue';
  
  export default {
    name: 'logarithm',
    components: {
      Logarithm,
      MathTopicsNav
    }
  }
</script>

