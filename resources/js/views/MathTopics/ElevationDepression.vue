<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <ElevationDepression />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import ElevationDepression from '../../components/MathTopics/ElevationDepression.vue';
  
  export default {
    name: 'elevation-and-depression',
    components: {
      ElevationDepression,
      MathTopicsNav
    }
  }
</script>

