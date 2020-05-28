<template>
  <div>
    <EnglishTopicsNav />
    <div class="container"> 
      <EngTopic4 />
    </div>
  </div>
</template>

<script>
  import EnglishTopicsNav from '../../components/Navigations/EnglishTopicsNav.vue';
  import EngTopic4 from '../../components/EnglishTopics/EngTopic4.vue';
  
  export default {
    name: 'engtopic4',
    components: {
      EngTopic4,
      EnglishTopicsNav
    }
  }
</script>

