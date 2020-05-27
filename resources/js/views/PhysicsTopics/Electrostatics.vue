<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <Electrostatics />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import Electrostatics from '../../components/PhysicsTopics/Electrostatics.vue';
  
  export default {
    name: 'electrostatics',
    components: {
      Electrostatics,
      PhysicsTopicsNav
    }
  }
</script>

