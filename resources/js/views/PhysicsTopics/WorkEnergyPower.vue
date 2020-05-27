<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <WorkEnergyPower />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import WorkEnergyPower from '../../components/PhysicsTopics/WorkEnergyPower.vue';
  
  export default {
    name: 'work-energy-power',
    components: {
      WorkEnergyPower,
      PhysicsTopicsNav
    }
  }
</script>

