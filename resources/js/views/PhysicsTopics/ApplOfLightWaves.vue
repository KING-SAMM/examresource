<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <ApplOfLightWaves />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import ApplOfLightWaves from '../../components/PhysicsTopics/ApplOfLightWaves.vue';
  
  export default {
    name: 'application-of-light-waves',
    components: {
      ApplOfLightWaves,
      PhysicsTopicsNav
    }
  }
</script>

