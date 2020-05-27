<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <PlaneGeometry />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import PlaneGeometry from '../../components/MathTopics/PlaneGeometry.vue';
  
  export default {
    name: 'plane-geometry',
    components: {
      PlaneGeometry,
      MathTopicsNav
    }
  }
</script>

