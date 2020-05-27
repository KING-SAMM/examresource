<template>
  <div>
    <BiologyTopicsNav />
    <div class="container"> 
      <BTopic2 />
    </div>
  </div>
</template>

<script>
  import BiologyTopicsNav from '../../components/Navigations/BiologyTopicsNav.vue';
  import BTopic2 from '../../components/BiologyTopics/BTopic2.vue';
  
  export default {
    name: 'btopic2',
    components: {
      BTopic2,
      BiologyTopicsNav
    }
  }
</script>

