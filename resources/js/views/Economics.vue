<template>
    <div class="container">
        <SubjectsNav />
        <Economics />
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



