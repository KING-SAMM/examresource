<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <FRM />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import FRM from '../../components/PhysicsTopics/FRM.vue';
  
  export default {
    name: 'fluids-at-rest-or-in-motion',
    components: {
      FRM,
      PhysicsTopicsNav
    }
  }
</script>

