<template>
    <div class="container">
        <Subjects />
    </div>
</template>


<script>
import Subjects from '../components/Subjects.vue'

export default {
  name: 'subjects',
  components: {
    Subjects
  }
}
</script>

<style lang="scss" scoped>
    h1, p { font-size: 2rem;}
    .text {
      color: white;
      text-decoration: none;
    }

    #economics {
      background-color: pink;
    }

    #government {
      background-color: chartreuse;
    }

    .darkText{
      color: #333;
      text-decoration: none;
    }

    .text-center {
      transform: scaleX(1);
      transition: transform 0.1s;
    }

    .text-center:hover {
      transform: scaleX(1.1);
    }
</style>



