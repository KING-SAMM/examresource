<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <Sets />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import Sets from '../../components/MathTopics/Sets.vue';
  
  export default {
    name: 'sets',
    components: {
      Sets,
      MathTopicsNav
    }
  }
</script>

