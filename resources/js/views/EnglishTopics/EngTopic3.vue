<template>
  <div>
    <EnglishTopicsNav />
    <div class="container"> 
      <EngTopic3 />
    </div>
  </div>
</template>

<script>
  import EnglishTopicsNav from '../../components/Navigations/EnglishTopicsNav.vue';
  import EngTopic3 from '../../components/EnglishTopics/EngTopic3.vue';
  
  export default {
    name: 'engtopic3',
    components: {
      EngTopic3,
      EnglishTopicsNav
    }
  }
</script>

