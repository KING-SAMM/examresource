<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <GravitationalField />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import GravitationalField from '../../components/PhysicsTopics/GravitationalField.vue';
  
  export default {
    name: 'gravitational-field',
    components: {
      GravitationalField,
      PhysicsTopicsNav
    }
  }
</script>

