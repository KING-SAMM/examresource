<template>
    <div>
        <h1>Biology</h1>
        <div class="input-group">
            <!-- <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
            </div> -->
            <p>Start exploring Biology resources and questions by topic</p>
        </div>
        <b-list-group>
            <b-list-group-item to="biology/topic1">Topic 1</b-list-group-item>
            <b-list-group-item to="biology/topic2" variant="primary">Topic 2</b-list-group-item>
            <b-list-group-item to="biology/topic3" variant="secondary">Topic 3</b-list-group-item>
            <b-list-group-item to="biology/topic4" variant="success">Topic 4</b-list-group-item>
            <b-list-group-item to="biology/topic5" variant="danger">Topic 5</b-list-group-item>
            <b-list-group-item to="biology/topic6" variant="warning">Topic 6</b-list-group-item>
            <b-list-group-item to="biology/topic7" variant="info">Topic 7</b-list-group-item>
            <b-list-group-item to="biology/topic8" variant="light">Topic 8</b-list-group-item>
            <b-list-group-item to="biology/topic9" variant="dark">Topic 9</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
    name: 'biology'
}
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }

  p {
    font-size: 1.5rem;
  }
</style>


