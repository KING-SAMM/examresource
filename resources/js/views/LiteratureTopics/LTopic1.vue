<template>
  <div>
    <LiteratureTopicsNav />
    <div class="container"> 
      <LTopic1 />
    </div>
  </div>
</template>

<script>
  import LiteratureTopicsNav from '../../components/Navigations/LiteratureTopicsNav.vue';
  import LTopic1 from '../../components/LiteratureTopics/LTopic1.vue';
  
  export default {
    name: 'ltopic1',
    components: {
      LTopic1,
      LiteratureTopicsNav
    }
  }
</script>

