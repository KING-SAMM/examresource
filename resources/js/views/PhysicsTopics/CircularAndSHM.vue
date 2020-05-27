<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <CircularAndSHM />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import CircularAndSHM from '../../components/PhysicsTopics/CircularAndSHM.vue';
  
  export default {
    name: 'circular-and-shm',
    components: {
      CircularAndSHM,
      PhysicsTopicsNav
    }
  }
</script>

