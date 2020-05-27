<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <SimpleMachines />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import SimpleMachines from '../../components/PhysicsTopics/SimpleMachines.vue';
  
  export default {
    name: 'simple-machines',
    components: {
      SimpleMachines,
      PhysicsTopicsNav
    }
  }
</script>

