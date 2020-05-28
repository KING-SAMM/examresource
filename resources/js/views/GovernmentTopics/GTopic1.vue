<template>
  <div>
    <GovernmentTopicsNav />
    <div class="container"> 
      <GTopic1 />
    </div>
  </div>
</template>

<script>
  import GovernmentTopicsNav from '../../components/Navigations/GovernmentTopicsNav.vue';
  import GTopic1 from '../../components/GovernmentTopics/GTopic1.vue';
  
  export default {
    name: 'gtopic1',
    components: {
      GTopic1,
      GovernmentTopicsNav
    }
  }
</script>

