<template>
  <div>
    <CommerceTopicsNav />
    <div class="container"> 
      <CTopic1 />
    </div>
  </div>
</template>

<script>
  import CommerceTopicsNav from '../../components/Navigations/CommerceTopicsNav.vue';
  import CTopic1 from '../../components/CommerceTopics/CTopic1.vue';
  
  export default {
    name: 'ctopic1',
    components: {
      CTopic1,
      CommerceTopicsNav
    }
  }
</script>

