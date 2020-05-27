<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Statistics />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Statistics from '../../components/MathTopics/Statistics.vue';
  
  export default {
    name: 'statistics',
    components: {
      Statistics,
      MathTopicsNav
    }
  }
</script>

