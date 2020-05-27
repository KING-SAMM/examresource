<template>
  <div>
    <CommerceTopicsNav />
    <div class="container"> 
      <CTopic2 />
    </div>
  </div>
</template>

<script>
  import CommerceTopicsNav from '../../components/Navigations/CommerceTopicsNav.vue';
  import CTopic2 from '../../components/CommerceTopics/CTopic2.vue';
  
  export default {
    name: 'ctopic2',
    components: {
      CTopic2,
      CommerceTopicsNav
    }
  }
</script>

