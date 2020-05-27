<template>
  <div>
    <EconomicsTopicsNav />
    <div class="container"> 
      <ETopic1 />
    </div>
  </div>
</template>

<script>
  import EconomicsTopicsNav from '../../components/Navigations/EconomicsTopicsNav.vue';
  import ETopic1 from '../../components/EconomicsTopics/ETopic1.vue';
  
  export default {
    name: 'etopic1',
    components: {
      ETopic1,
      EconomicsTopicsNav
    }
  }
</script>

