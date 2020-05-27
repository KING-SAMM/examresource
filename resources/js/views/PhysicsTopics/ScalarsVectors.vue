<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <ScalarsVectors />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import ScalarsVectors from '../../components/PhysicsTopics/ScalarsVectors.vue';
  
  export default {
    name: 'scalars-and-vectors',
    components: {
      ScalarsVectors,
      PhysicsTopicsNav
    }
  }
</script>

