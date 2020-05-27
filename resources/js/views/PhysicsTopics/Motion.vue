<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <Motion />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import Motion from '../../components/PhysicsTopics/Motion.vue';
  
  export default {
    name: 'motion',
    components: {
      Motion,
      PhysicsTopicsNav
    }
  }
</script>

