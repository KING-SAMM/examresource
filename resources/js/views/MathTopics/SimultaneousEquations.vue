<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <SimultaneousEquations />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import SimultaneousEquations from '../../components/MathTopics/SimultaneousEquations.vue';
  
  export default {
    name: 'simultaneous-equations',
    components: {
      SimultaneousEquations,
      MathTopicsNav
    }
  }
</script>

