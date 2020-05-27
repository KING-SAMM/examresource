<template>
    <div class="container">
        <SubjectsNav />
        <Math />
    </div>
</template>

<script>
import Math from '../components/Math.vue';
import SubjectsNav from '../components/Navigations/SubjectsNav.vue';

export default {
  name: 'math',
  components: {
    Math,
    SubjectsNav
  }
}
</script>



