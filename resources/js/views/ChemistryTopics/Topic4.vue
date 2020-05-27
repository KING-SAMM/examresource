<template>
  <div>
    <ChemistryTopicsNav />
    <div class="container"> 
      <CTopic4 />
    </div>
  </div>
</template>

<script>
  import ChemistryTopicsNav from '../../components/Navigations/ChemistryTopicsNav.vue';
  import CTopic4 from '../../components/ChemistryTopics/CTopic4.vue';
  
  export default {
    name: 'topic4',
    components: {
      CTopic4,
      ChemistryTopicsNav
    }
  }
</script>

