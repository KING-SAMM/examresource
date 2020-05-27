<template>
  <div>
    <ChemistryTopicsNav />
    <div class="container"> 
      <CTopic1 />
    </div>
  </div>
</template>

<script>
  import ChemistryTopicsNav from '../../components/Navigations/ChemistryTopicsNav.vue';
  import CTopic1 from '../../components/ChemistryTopics/CTopic1.vue';
  
  export default {
    name: 'topic1',
    components: {
      CTopic1,
      ChemistryTopicsNav
    }
  }
</script>

