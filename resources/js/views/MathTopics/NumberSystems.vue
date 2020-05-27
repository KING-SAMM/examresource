<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <NumberSystems />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import NumberSystems from '../../components/MathTopics/NumberSystems.vue';
  
  export default {
    name: 'Number-systems',
    components: {
      NumberSystems,
      MathTopicsNav
    }
  }
</script>

