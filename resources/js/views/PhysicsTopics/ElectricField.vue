<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <ElectricField />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import ElectricField from '../../components/PhysicsTopics/ElectricField.vue';
  
  export default {
    name: 'electric-field',
    components: {
      ElectricField,
      PhysicsTopicsNav
    }
  }
</script>

