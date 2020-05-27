<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <MensOfPlaneShapes />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import MensOfPlaneShapes from '../../components/MathTopics/MensOfPlaneShapes.vue';
  
  export default {
    name: 'mensuration-of-plane-shapes',
    components: {
      MensOfPlaneShapes,
      MathTopicsNav
    }
  }
</script>

