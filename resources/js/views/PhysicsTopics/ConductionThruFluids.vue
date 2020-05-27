<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <ConductionThruFluids />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import ConductionThruFluids from '../../components/PhysicsTopics/ConductionThruFluids.vue';
  
  export default {
    name: 'conduction-through-fluids',
    components: {
      ConductionThruFluids,
      PhysicsTopicsNav
    }
  }
</script>

