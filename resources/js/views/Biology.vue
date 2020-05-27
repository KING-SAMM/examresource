<template>
    <div class="container">
        <SubjectsNav />
        <Biology />
    </div>
</template>

<script>
import Biology from '../components/Biology.vue';
import SubjectsNav from '../components/Navigations/SubjectsNav.vue';

export default {
  name: 'biology',
  components: {
    Biology,
    SubjectsNav
  }
}
</script>




