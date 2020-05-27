<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <PressureInFluids />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import PressureInFluids from '../../components/PhysicsTopics/PressureInFluids.vue';
  
  export default {
    name: 'pressure-in-fluids',
    components: {
      PressureInFluids,
      PhysicsTopicsNav
    }
  }
</script>

