<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <MensOfSolidShapes />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import MensOfSolidShapes from '../../components/MathTopics/MensOfSolidShapes.vue';
  
  export default {
    name: 'mensuration-of-solid-shapes',
    components: {
      MensOfSolidShapes,
      MathTopicsNav
    }
  }
</script>

