<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <Expansivity />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import Expansivity from '../../components/PhysicsTopics/Expansivity.vue';
  
  export default {
    name: 'expansivity',
    components: {
      Expansivity,
      PhysicsTopicsNav
    }
  }
</script>

