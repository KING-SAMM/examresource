<template>
  <div>
    <CommerceTopicsNav />
    <div class="container"> 
      <CTopic3 />
    </div>
  </div>
</template>

<script>
  import CommerceTopicsNav from '../../components/Navigations/CommerceTopicsNav.vue';
  import CTopic3 from '../../components/CommerceTopics/CTopic3.vue';
  
  export default {
    name: 'ctopic3',
    components: {
      CTopic3,
      CommerceTopicsNav
    }
  }
</script>

