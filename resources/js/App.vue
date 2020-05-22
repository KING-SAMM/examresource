<template>
    <transition name="slide">
        <router-view></router-view>
    </transition>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
 // name: 'app',
  components: {
     // Math,
      Nav
  }
}
</script>