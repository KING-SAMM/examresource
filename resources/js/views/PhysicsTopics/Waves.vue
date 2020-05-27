<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <Waves />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import Waves from '../../components/PhysicsTopics/Waves.vue';
  
  export default {
    name: 'waves',
    components: {
      Waves,
      PhysicsTopicsNav
    }
  }
</script>

