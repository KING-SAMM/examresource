<template>
  <div>
    <ChemistryTopicsNav />
    <div class="container"> 
      <CTopic3 />
    </div>
  </div>
</template>

<script>
  import ChemistryTopicsNav from '../../components/Navigations/ChemistryTopicsNav.vue';
  import CTopic3 from '../../components/ChemistryTopics/CTopic3.vue';
  
  export default {
    name: 'topic3',
    components: {
      CTopic3,
      ChemistryTopicsNav
    }
  }
</script>

