<template>
    <div>
        <h1>Literature</h1>
        <div class="input-group">
            <!-- <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
            </div> -->
            <p>Start exploring Literature resources and questions by topic</p>
        </div>
        <b-list-group>
            <b-list-group-item to="literature/topic1">Topic 1</b-list-group-item>
            <b-list-group-item to="literature/topic2" variant="primary">Topic 2</b-list-group-item>
            <b-list-group-item to="literature/topic3" variant="secondary">Topic 3</b-list-group-item>
            <b-list-group-item to="literature/topic4" variant="success">Topic 4</b-list-group-item>
            <b-list-group-item to="literature/topic5" variant="danger">Topic 5</b-list-group-item>
            <b-list-group-item to="literature/topic6" variant="warning">Topic 6</b-list-group-item>
            <b-list-group-item to="literature/topic7" variant="info">Topic 7</b-list-group-item>
            <b-list-group-item to="literature/topic8" variant="light">Topic 8</b-list-group-item>
            <b-list-group-item to="literature/topic9" variant="dark">Topic 9</b-list-group-item>
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