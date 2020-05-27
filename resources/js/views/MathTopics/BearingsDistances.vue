<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <BearingsDistances />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import BearingsDistances from '../../components/MathTopics/BearingsDistances.vue';
  
  export default {
    name: 'bearings-and-distances',
    components: {
      BearingsDistances,
      MathTopicsNav
    }
  }
</script>

