<template>
  <div>
    <ChemistryTopicsNav />
    <div class="container"> 
      <CTopic2 />
    </div>
  </div>
</template>

<script>
  import ChemistryTopicsNav from '../../components/Navigations/ChemistryTopicsNav.vue';
  import CTopic2 from '../../components/ChemistryTopics/CTopic2.vue';
  
  export default {
    name: 'topic2',
    components: {
      CTopic2,
      ChemistryTopicsNav
    }
  }
</script>

