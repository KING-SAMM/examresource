<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Factorisation />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Factorisation from '../../components/MathTopics/Factorisation.vue';
  
  export default {
    name: 'factorisation',
    components: {
      Factorisation,
      MathTopicsNav
    }
  }
</script>

