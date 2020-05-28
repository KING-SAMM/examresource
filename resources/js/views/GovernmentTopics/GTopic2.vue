<template>
  <div>
    <GovernmentTopicsNav />
    <div class="container"> 
      <GTopic2 />
    </div>
  </div>
</template>

<script>
  import GovernmentTopicsNav from '../../components/Navigations/GovernmentTopicsNav.vue';
  import GTopic2 from '../../components/GovernmentTopics/GTopic2.vue';
  
  export default {
    name: 'gtopic2',
    components: {
      GTopic2,
      GovernmentTopicsNav
    }
  }
</script>

