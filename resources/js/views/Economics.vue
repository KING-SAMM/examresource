<template>
    <div>
      <SubjectsNav />
      <div class="container">
          <Economics />
      </div>
    </div>
</template>

<script>
import Economics from '../components/Economics.vue';
import SubjectsNav from '../components/Navigations/SubjectsNav.vue';

export default {
  name: 'economics',
  components: {
    Economics,
    SubjectsNav
  }
}
</script>



