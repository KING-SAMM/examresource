<template>
    <div>
        <h1>Government</h1>
        <div class="input-group">
            <!-- <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
            </div> -->
            <p>Start exploring Government resources and questions by topic</p>
        </div>
        <b-list-group>
            <b-list-group-item to="/government/gtopic1">Topic 1</b-list-group-item>
            <b-list-group-item to="/government/gtopic2" variant="primary">Topic 2</b-list-group-item>
            <b-list-group-item to="/government/gtopic3" variant="secondary">Topic 3</b-list-group-item>
            <b-list-group-item to="/government/gtopic4" variant="success">Topic 4</b-list-group-item>
            <b-list-group-item to="/government/gtopic5" variant="danger">Topic 5</b-list-group-item>
            <b-list-group-item to="/government/gtopic6" variant="warning">Topic 6</b-list-group-item>
            <b-list-group-item to="/government/gtopic7" variant="info">Topic 7</b-list-group-item>
            <b-list-group-item to="/government/gtopic8" variant="light">Topic 8</b-list-group-item>
            <b-list-group-item to="/government/gtopic9" variant="dark">Topic 9</b-list-group-item>
        </b-list-group>
    </div>
</template>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }

  p {
    font-size: 1.5rem;
  }
</style>