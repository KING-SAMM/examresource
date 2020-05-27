<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <BinaryOperations />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import BinaryOperations from '../../components/MathTopics/BinaryOperations.vue';
  
  export default {
    name: 'binary-operations',
    components: {
      BinaryOperations,
      MathTopicsNav
    }
  }
</script>

