<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <RadioactivityNuclearEnergy />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import RadioactivityNuclearEnergy from '../../components/PhysicsTopics/RadioactivityNuclearEnergy.vue';
  
  export default {
    name: 'radioactivity-and-nuclear-energy',
    components: {
      RadioactivityNuclearEnergy,
      PhysicsTopicsNav
    }
  }
</script>

