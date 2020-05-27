<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Progression />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Progression from '../../components/MathTopics/Progression.vue';
  
  export default {
    name: 'progression',
    components: {
      Progression,
      MathTopicsNav
    }
  }
</script>

