<template>
  <div>
    <GovernmentTopicsNav />
    <div class="container"> 
      <GTopic3 />
    </div>
  </div>
</template>

<script>
  import GovernmentTopicsNav from '../../components/Navigations/GovernmentTopicsNav.vue';
  import GTopic3 from '../../components/GovernmentTopics/GTopic3.vue';
  
  export default {
    name: 'gtopic3',
    components: {
      GTopic3,
      GovernmentTopicsNav
    }
  }
</script>

