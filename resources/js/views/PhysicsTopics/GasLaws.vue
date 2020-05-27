<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <GasLaws />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import GasLaws from '../../components/PhysicsTopics/GasLaws.vue';
  
  export default {
    name: 'gas-laws',
    components: {
      GasLaws,
      PhysicsTopicsNav
    }
  }
</script>

