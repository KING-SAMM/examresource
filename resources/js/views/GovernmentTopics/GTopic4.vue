<template>
  <div>
    <GovernmentTopicsNav />
    <div class="container"> 
      <GTopic4 />
    </div>
  </div>
</template>

<script>
  import GovernmentTopicsNav from '../../components/Navigations/GovernmentTopicsNav.vue';
  import GTopic4 from '../../components/GovernmentTopics/GTopic4.vue';
  
  export default {
    name: 'gtopic4',
    components: {
      GTopic4,
      GovernmentTopicsNav
    }
  }
</script>

