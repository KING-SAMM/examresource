<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Matrices />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Matrices from '../../components/MathTopics/Matrices.vue';
  
  export default {
    name: 'matrices',
    components: {
      Matrices,
      MathTopicsNav
    }
  }
</script>

