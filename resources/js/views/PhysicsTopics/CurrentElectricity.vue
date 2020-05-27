<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <CurrentElectricity />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import CurrentElectricity from '../../components/PhysicsTopics/CurrentElectricity.vue';
  
  export default {
    name: 'current-electricity',
    components: {
      CurrentElectricity,
      PhysicsTopicsNav
    }
  }
</script>

