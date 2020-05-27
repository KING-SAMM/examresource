<template>
    <div>
      <SubjectsNav />
      <div class="container">
          <Physics />
      </div>
    </div>
</template>

<script>
import Physics from '../components/Physics.vue';
import SubjectsNav from '../components/Navigations/SubjectsNav.vue';

export default {
  name: 'physics',
  components: {
    Physics,
    SubjectsNav
  }
}
</script>



