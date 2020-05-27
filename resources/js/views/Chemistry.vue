<template>
    <div class="container">
        <SubjectsNav />
        <Chemistry />
    </div>
</template>

<script>
import Chemistry from '../components/Chemistry.vue';
import SubjectsNav from '../components/Navigations/SubjectsNav.vue';

export default {
  name: 'chemistry',
  components: {
    Chemistry,
    SubjectsNav
  }
}
</script>





