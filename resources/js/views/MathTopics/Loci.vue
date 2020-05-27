<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Loci />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Loci from '../../components/MathTopics/Loci.vue';
  
  export default {
    name: 'loci',
    components: {
      Loci,
      MathTopicsNav
    }
  }
</script>

