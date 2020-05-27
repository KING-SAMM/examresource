<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <EMFields />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import EMFields from '../../components/PhysicsTopics/EMFields.vue';
  
  export default {
    name: 'electromagnetic-fields',
    components: {
      EMFields,
      PhysicsTopicsNav
    }
  }
</script>

