<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <HeatEnergy />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import HeatEnergy from '../../components/PhysicsTopics/HeatEnergy.vue';
  
  export default {
    name: 'heat-energy',
    components: {
      HeatEnergy,
      PhysicsTopicsNav
    }
  }
</script>

