<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <OpticalInstruments />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import OpticalInstruments from '../../components/PhysicsTopics/OpticalInstruments.vue';
  
  export default {
    name: 'optical-instruments',
    components: {
      OpticalInstruments,
      PhysicsTopicsNav
    }
  }
</script>

