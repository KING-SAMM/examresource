<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <PermutationCombination />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import PermutationCombination from '../../components/MathTopics/PermutationCombination.vue';
  
  export default {
    name: 'permutation-and-combination',
    components: {
      PermutationCombination,
      MathTopicsNav
    }
  }
</script>

