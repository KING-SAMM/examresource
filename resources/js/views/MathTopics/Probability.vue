<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Probability />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Probability from '../../components/MathTopics/Probability.vue';
  
  export default {
    name: 'probability',
    components: {
      Probability,
      MathTopicsNav
    }
  }
</script>

