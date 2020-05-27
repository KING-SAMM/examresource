<template>
   <div>
      <SubjectsNav />
      <div class="container">
          <English />
      </div>
   </div>
</template>

<script>
import English from '../components/English.vue';
import SubjectsNav from '../components/Navigations/SubjectsNav.vue';

export default {
  name: 'english',
  components: {
    English,
    SubjectsNav
  }
}
</script>



