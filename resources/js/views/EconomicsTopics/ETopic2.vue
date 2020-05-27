<template>
  <div>
    <EconomicsTopicsNav />
    <div class="container"> 
      <ETopic2 />
    </div>
  </div>
</template>

<script>
  import EconomicsTopicsNav from '../../components/Navigations/EconomicsTopicsNav.vue';
  import ETopic2 from '../../components/EconomicsTopics/ETopic2.vue';
  
  export default {
    name: 'etopic2',
    components: {
      ETopic2,
      EconomicsTopicsNav
    }
  }
</script>

