<template>
  <div>
    <EconomicsTopicsNav />
    <div class="container"> 
      <ETopic3 />
    </div>
  </div>
</template>

<script>
  import EconomicsTopicsNav from '../../components/Navigations/EconomicsTopicsNav.vue';
  import ETopic3 from '../../components/EconomicsTopics/ETopic3.vue';
  
  export default {
    name: 'etopic3',
    components: {
      ETopic3,
      EconomicsTopicsNav
    }
  }
</script>

