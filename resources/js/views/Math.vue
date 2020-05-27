<template>
    <div>
      <SubjectsNav />
      <div class="container">
          <Math />
      </div>
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



