<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <ReflectionOfLight />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import ReflectionOfLight from '../../components/PhysicsTopics/ReflectionOfLight.vue';
  
  export default {
    name: 'reflection-of-light',
    components: {
      ReflectionOfLight,
      PhysicsTopicsNav
    }
  }
</script>

