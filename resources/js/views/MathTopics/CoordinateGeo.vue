<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <CoordinateGeo />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import CoordinateGeo from '../../components/MathTopics/CoordinateGeo.vue';
  
  export default {
    name: 'coordinategeo',
    components: {
      CoordinateGeo,
      MathTopicsNav
    }
  }
</script>

