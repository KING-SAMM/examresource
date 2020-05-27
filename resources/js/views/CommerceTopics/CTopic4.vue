<template>
  <div>
    <CommerceTopicsNav />
    <div class="container"> 
      <CTopic4 />
    </div>
  </div>
</template>

<script>
  import CommerceTopicsNav from '../../components/Navigations/CommerceTopicsNav.vue';
  import CTopic4 from '../../components/CommerceTopics/CTopic4.vue';
  
  export default {
    name: 'ctopic4',
    components: {
      CTopic4,
      CommerceTopicsNav
    }
  }
</script>

