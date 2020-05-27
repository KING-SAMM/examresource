<template>
    <div class="container">
        <SubjectsNav />
        <Commerce />
    </div>
</template>

<script>
import Commerce from '../components/Commerce.vue';
import SubjectsNav from '../components/Navigations/SubjectsNav.vue';

export default {
  name: 'commerce',
  components: {
    Commerce,
    SubjectsNav
  }
}
</script>



