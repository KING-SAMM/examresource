<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <Equilibrium />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import Equilibrium from '../../components/PhysicsTopics/Equilibrium.vue';
  
  export default {
    name: 'equilibrium',
    components: {
      Equilibrium,
      PhysicsTopicsNav
    }
  }
</script>

