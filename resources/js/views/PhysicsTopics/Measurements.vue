<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <Measurements />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import Measurements from '../../components/PhysicsTopics/Measurements.vue';
  
  export default {
    name: 'measurements',
    components: {
      Measurements,
      PhysicsTopicsNav
    }
  }
</script>

