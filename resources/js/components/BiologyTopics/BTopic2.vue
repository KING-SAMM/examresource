<template>
    <div class="container">
        <h1>Topic 2</h1>
        <div class="input-group">
            <!-- <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
            </div> -->
            <p id="firstPara">Click to view a question with associated solutions</p>
        </div>
        <div role="tablist">
            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-1 variant="info">Question 1</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <!-- <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text> -->
                <b-card-text>{{ question1 }}</b-card-text>
                <b-card-text><b-button variant="info" v-b-toggle.full>Explanation</b-button><b-button variant="warning" v-b-toggle.answer>Answer</b-button></b-card-text>
                <b-collapse id="answer"><b-card-text>{{ answer1 }}</b-card-text></b-collapse>
                <b-collapse id="full"><b-card-text>{{ explanation1 }}</b-card-text></b-collapse>
                </b-card-body>
            </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-2 variant="info">Question 2</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>{{ question2 }}</b-card-text>
                <b-card-text><b-button variant="info" v-b-toggle.full>Explanation</b-button><b-button variant="warning" v-b-toggle.answer>Answer</b-button></b-card-text>
                <b-collapse id="answer"><b-card-text>{{ answer2 }}</b-card-text></b-collapse>
                <b-collapse id="full"><b-card-text>{{ explanation2 }}</b-card-text></b-collapse>
                </b-card-body>
            </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-3 variant="info">Question 3</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>{{ question3 }}</b-card-text>
                <b-card-text><b-button variant="info" v-b-toggle.full>Explanation</b-button><b-button variant="warning" v-b-toggle.answer>Answer</b-button></b-card-text>
                <b-collapse id="answer"><b-card-text>{{ answer3 }}</b-card-text></b-collapse>
                <b-collapse id="full"><b-card-text>{{ explanation3 }}</b-card-text></b-collapse>
                </b-card-body>
            </b-collapse>
            </b-card>

                <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-4 variant="info">Question 4</b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>{{ question4 }}</b-card-text>
                <b-card-text><b-button variant="info" v-b-toggle.full>Explanation</b-button><b-button variant="warning" v-b-toggle.answer>Answer</b-button></b-card-text>
                <b-collapse id="answer"><b-card-text>{{ answer4 }}</b-card-text></b-collapse>
                <b-collapse id="full"><b-card-text>{{ explanation4 }}</b-card-text></b-collapse>
                </b-card-body>
            </b-collapse>
            </b-card>

                <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-5 variant="info">Question 5</b-button>
            </b-card-header>
            <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                <b-card-text>{{ question5 }}</b-card-text>
                <b-card-text><b-button variant="info" v-b-toggle.full>Explanation</b-button><b-button variant="warning" v-b-toggle.answer>Answer</b-button></b-card-text>
                <b-collapse id="answer"><b-card-text>{{ answer5 }}</b-card-text></b-collapse>
                <b-collapse id="full"><b-card-text>{{ explanation5 }}</b-card-text></b-collapse>
                </b-card-body>
            </b-collapse>
            </b-card>
        </div>

    </div>
</template>

<script>
  import {BTOPIC2_Q1, BTOPIC2_Q2, BTOPIC2_Q3, BTOPIC2_Q4, BTOPIC2_Q5} from '../../QuestionsAndSolutions/Biology/BTopic2/questions.js';
  import {BTOPIC2_ANS1, BTOPIC2_ANS2, BTOPIC2_ANS3, BTOPIC2_ANS4} from '../../QuestionsAndSolutions/Biology/BTopic2/solutions.js';
  import {BTOPIC2_EXP1, BTOPIC2_EXP2, BTOPIC2_EXP3, BTOPIC2_EXP4} from '../../QuestionsAndSolutions/Biology/BTopic2/solutions.js';
  export default {
      name: 'btopic2',
    data() {
      return {
        question1: BTOPIC2_Q1,
        question2: BTOPIC2_Q2,
        question3: BTOPIC2_Q3,
        question4: BTOPIC2_Q4,
        question5: BTOPIC2_Q5,
        answer1: BTOPIC2_ANS1,
        answer2: BTOPIC2_ANS2,
        answer3: BTOPIC2_ANS3,
        answer4: BTOPIC2_ANS4,
        explanation1: BTOPIC2_EXP1,
        explanation2: BTOPIC2_EXP2,
        explanation3: BTOPIC2_EXP3,
        explanation4: BTOPIC2_EXP4
        //showFullSolution: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }

  p#firstPara {
    font-size: 1.5rem;
  }

</style>




