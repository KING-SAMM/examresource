<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <SoundWaves />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import SoundWaves from '../../components/PhysicsTopics/SoundWaves.vue';
  
  export default {
    name: 'sound-waves',
    components: {
      SoundWaves,
      PhysicsTopicsNav
    }
  }
</script>

