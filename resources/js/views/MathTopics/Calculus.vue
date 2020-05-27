<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Calculus />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Calculus from '../../components/MathTopics/Calculus.vue';
  
  export default {
    name: 'calculus',
    components: {
      Calculus,
      MathTopicsNav
    }
  }
</script>

