<template>
  <div>
    <EnglishTopicsNav />
    <div class="container"> 
      <EngTopic1 />
    </div>
  </div>
</template>

<script>
  import EnglishTopicsNav from '../../components/Navigations/EnglishTopicsNav.vue';
  import EngTopic1 from '../../components/EnglishTopics/EngTopic1.vue';
  
  export default {
    name: 'engtopic1',
    components: {
      EngTopic1,
      EnglishTopicsNav
    }
  }
</script>

