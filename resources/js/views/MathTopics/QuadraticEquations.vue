<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <QuadraticEquations />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import QuadraticEquations from '../../components/MathTopics/QuadraticEquations.vue';
  
  export default {
    name: 'quadratic-equations',
    components: {
      QuadraticEquations,
      MathTopicsNav
    }
  }
</script>

