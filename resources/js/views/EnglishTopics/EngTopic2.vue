<template>
  <div>
    <EnglishTopicsNav />
    <div class="container"> 
      <EngTopic2 />
    </div>
  </div>
</template>

<script>
  import EnglishTopicsNav from '../../components/Navigations/EnglishTopicsNav.vue';
  import EngTopic2 from '../../components/EnglishTopics/EngTopic2.vue';
  
  export default {
    name: 'engtopic2',
    components: {
      EngTopic2,
      EnglishTopicsNav
    }
  }
</script>

