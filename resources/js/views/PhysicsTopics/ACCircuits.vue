<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <ACCircuits />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import ACCircuits from '../../components/PhysicsTopics/ACCircuits.vue';
  
  export default {
    name: 'ac-circuits',
    components: {
      ACCircuits,
      PhysicsTopicsNav
    }
  }
</script>

