<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Angles />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Angles from '../../components/MathTopics/Angles.vue';
  
  export default {
    name: 'angles',
    components: {
      Angles,
      MathTopicsNav
    }
  }
</script>

