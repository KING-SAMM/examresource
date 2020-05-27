<template>
  <div>
    <BiologyTopicsNav />
    <div class="container"> 
      <BTopic3 />
    </div>
  </div>
</template>

<script>
  import BiologyTopicsNav from '../../components/Navigations/BiologyTopicsNav.vue';
  import BTopic3 from '../../components/BiologyTopics/BTopic3.vue';
  
  export default {
    name: 'btopic3',
    components: {
      BTopic3,
      BiologyTopicsNav
    }
  }
</script>

