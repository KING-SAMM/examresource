<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Polynomials />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Polynomials from '../../components/MathTopics/Polynomials.vue';
  
  export default {
    name: 'polynomials',
    components: {
      Polynomials,
      MathTopicsNav
    }
  }
</script>

