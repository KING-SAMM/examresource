<template>
  <div>
    <PhysicsTopicsNav />
    <div class="container"> 
      <QMSemiconductors />
    </div>
  </div>
</template>

<script>
  import PhysicsTopicsNav from '../../components/Navigations/PhysicsTopicsNav.vue';
  import QMSemiconductors from '../../components/PhysicsTopics/QMSemiconductors.vue';
  
  export default {
    name: 'qm-semiconductors',
    components: {
      QMSemiconductors,
      PhysicsTopicsNav
    }
  }
</script>

