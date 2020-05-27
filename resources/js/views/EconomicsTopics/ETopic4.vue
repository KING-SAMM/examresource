<template>
  <div>
    <EconomicsTopicsNav />
    <div class="container"> 
      <ETopic4 />
    </div>
  </div>
</template>

<script>
  import EconomicsTopicsNav from '../../components/Navigations/EconomicsTopicsNav.vue';
  import ETopic4 from '../../components/EconomicsTopics/ETopic4.vue';
  
  export default {
    name: 'etopic4',
    components: {
      ETopic4,
      EconomicsTopicsNav
    }
  }
</script>

