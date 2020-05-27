<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <ENC />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import ENC from '../../components/PhysicsTopics/ENC.vue';
  
  export default {
    name: 'elasticity-matter-crystal-structure',
    components: {
      ENC,
      PhysicsTopicsNav
    }
  }
</script>

