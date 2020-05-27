<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Surds />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Surds from '../../components/MathTopics/Surds.vue';
  
  export default {
    name: 'surds',
    components: {
      Surds,
      MathTopicsNav
    }
  }
</script>

