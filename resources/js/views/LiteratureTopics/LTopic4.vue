<template>
  <div>
    <LiteratureTopicsNav />
    <div class="container"> 
      <LTopic4 />
    </div>
  </div>
</template>

<script>
  import LiteratureTopicsNav from '../../components/Navigations/LiteratureTopicsNav.vue';
  import LTopic4 from '../../components/LiteratureTopics/LTopic4.vue';
  
  export default {
    name: 'ltopic4',
    components: {
      LTopic4,
      LiteratureTopicsNav
    }
  }
</script>

