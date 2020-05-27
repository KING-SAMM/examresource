<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Indices />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Indices from '../../components/MathTopics/Indices.vue';
  
  export default {
    name: 'indices',
    components: {
      Indices,
      MathTopicsNav
    }
  }
</script>

