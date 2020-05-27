<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Limits />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Limits from '../../components/MathTopics/Limits.vue';
  
  export default {
    name: 'limits',
    components: {
      Limits,
      MathTopicsNav
    }
  }
</script>

