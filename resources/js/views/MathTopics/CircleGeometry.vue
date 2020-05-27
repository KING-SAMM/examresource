<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <CircleGeometry />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import CircleGeometry from '../../components/MathTopics/CircleGeometry.vue';
  
  export default {
    name: 'circle-geometry',
    components: {
      CircleGeometry,
      MathTopicsNav
    }
  }
</script>

