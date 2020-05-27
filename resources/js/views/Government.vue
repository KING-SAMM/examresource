<template>
    <div>
      <SubjectsNav />
      <div class="container">
          <Government />
      </div>
    </div>
</template>

<script>
import Government from '../components/Government.vue';
import SubjectsNav from '../components/Navigations/SubjectsNav.vue';

export default {
  name: 'government',
  components: {
    Government,
    SubjectsNav
  }
}
</script>



