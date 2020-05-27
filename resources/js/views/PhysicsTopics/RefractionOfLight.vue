<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <RefractionOfLight />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import RefractionOfLight from '../../components/PhysicsTopics/RefractionOfLight.vue';
  
  export default {
    name: 'refraction-of-light',
    components: {
      RefractionOfLight,
      PhysicsTopicsNav
    }
  }
</script>

