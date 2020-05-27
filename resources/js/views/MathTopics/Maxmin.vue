<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Maxmin />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Maxmin from '../../components/MathTopics/Maxmin.vue';
  
  export default {
    name: 'maxmin',
    components: {
      Maxmin,
      MathTopicsNav
    }
  }
</script>

