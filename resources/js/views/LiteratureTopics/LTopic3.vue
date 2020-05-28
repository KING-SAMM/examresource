<template>
  <div>
    <LiteratureTopicsNav />
    <div class="container"> 
      <LTopic3 />
    </div>
  </div>
</template>

<script>
  import LiteratureTopicsNav from '../../components/Navigations/LiteratureTopicsNav.vue';
  import LTopic3 from '../../components/LiteratureTopics/LTopic3.vue';
  
  export default {
    name: 'ltopic3',
    components: {
      LTopic3,
      LiteratureTopicsNav
    }
  }
</script>

