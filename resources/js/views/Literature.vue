<template>
    <div class="container">
        <SubjectsNav />
        <Literature />
    </div>
</template>

<script>
import Literature from '../components/Literature.vue';
import SubjectsNav from '../components/Navigations/SubjectsNav.vue';

export default {
  name: 'literature',
  components: {
    Literature,
    SubjectsNav
  }
}
</script>



