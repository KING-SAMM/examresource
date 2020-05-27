<template>
  <div>
    <BiologyTopicsNav />
    <div class="container"> 
      <BTopic4 />
    </div>
  </div>
</template>

<script>
  import BiologyTopicsNav from '../../components/Navigations/BiologyTopicsNav.vue';
  import BTopic4 from '../../components/BiologyTopics/BTopic4.vue';
  
  export default {
    name: 'btopic4',
    components: {
      BTopic4,
      BiologyTopicsNav
    }
  }
</script>

