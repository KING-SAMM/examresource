<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Trigonometry />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Trigonometry from '../../components/MathTopics/Trigonometry.vue';
  
  export default {
    name: 'trigonometry',
    components: {
      Trigonometry,
      MathTopicsNav
    }
  }
</script>

