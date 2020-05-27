<template>
  <div>
    <MathTopicsNav />
    <div class="container"> 
      <ChangeOfSubject />
    </div>
  </div>
</template>

<script>
  import MathTopicsNav from '../../components/Navigations/MathTopicsNav.vue';
  import ChangeOfSubject from '../../components/MathTopics/ChangeOfSubject.vue';
  
  export default {
    name: 'change-of-subject-of-formula',
    components: {
      ChangeOfSubject,
      MathTopicsNav
    }
  }
</script>

