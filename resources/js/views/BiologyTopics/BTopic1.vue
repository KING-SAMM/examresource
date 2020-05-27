<template>
  <div>
    <BiologyTopicsNav />
    <div class="container"> 
      <BTopic1 />
    </div>
  </div>
</template>

<script>
  import BiologyTopicsNav from '../../components/Navigations/BiologyTopicsNav.vue';
  import BTopic1 from '../../components/BiologyTopics/BTopic1.vue';
  
  export default {
    name: 'btopic1',
    components: {
      BTopic1,
      BiologyTopicsNav
    }
  }
</script>

