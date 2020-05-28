<template>
  <div>
    <LiteratureTopicsNav />
    <div class="container"> 
      <LTopic2 />
    </div>
  </div>
</template>

<script>
  import LiteratureTopicsNav from '../../components/Navigations/LiteratureTopicsNav.vue';
  import LTopic2 from '../../components/LiteratureTopics/LTopic2.vue';
  
  export default {
    name: 'ltopic2',
    components: {
      LTopic2,
      LiteratureTopicsNav
    }
  }
</script>

