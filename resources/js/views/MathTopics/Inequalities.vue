<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Inequalities />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Inequalities from '../../components/MathTopics/Inequalities.vue';
  
  export default {
    name: 'inequalities',
    components: {
      Inequalities,
      MathTopicsNav
    }
  }
</script>

