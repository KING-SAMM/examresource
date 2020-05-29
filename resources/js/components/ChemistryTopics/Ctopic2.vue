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
                <b-card-text><b-button variant="info" v-b-toggle.short>Short solution</b-button><b-button variant="info" v-b-toggle.full>Full solution</b-button><b-button variant="warning" v-b-toggle.answer>Answer</b-button></b-card-text>
                <b-collapse id="answer">
                <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_ANS3_COPY_80.png')"></b-img>
                </b-collapse>
                <b-collapse id="short"><b-card-text>{{ shortSolution }}</b-card-text></b-collapse>
                <b-collapse id="full"><b-card-text>{{ fullSolution }}</b-card-text></b-collapse>
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
                <b-card-text><b-button variant="info" v-b-toggle.short>Short solution</b-button><b-button variant="info" v-b-toggle.full>Full solution</b-button><b-button variant="warning" v-b-toggle.answer>Answer</b-button></b-card-text>
                <b-collapse id="answer">
                <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_ANS3_COPY_80.png')"></b-img>
                </b-collapse>
                <b-collapse id="short"><b-card-text>{{ shortSolution2 }}</b-card-text></b-collapse>
                <b-collapse id="full"><b-card-text>{{ fullSolution2 }}</b-card-text></b-collapse>
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
                <b-card-text><b-button variant="info" v-b-toggle.short>Short solution</b-button><b-button variant="info" v-b-toggle.full>Full solution</b-button><b-button variant="warning" v-b-toggle.answer>Answer</b-button></b-card-text>
                <b-collapse id="answer">
                <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_ANS3_COPY_80.png')"></b-img>
                </b-collapse>
                <b-collapse id="short"><b-card-text text-tag="header">
                {{ fullSolution3[1] }}<br>{{ fullSolution3[3] }}<br>{{ fullSolution3[5] }}
                </b-card-text></b-collapse>
                <b-collapse id="full">
                <br>{{ fullSolution3[0] }}<br>{{ fullSolution3[1] }}
                <br>{{ fullSolution3[2] }}<br>{{ fullSolution3[3] }}
                <br>{{ fullSolution3[4] }}<br>{{ fullSolution3[5] }}
                </b-collapse>
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
                <b-card-text><b-button variant="info" v-b-toggle.short>Short solution</b-button><b-button variant="info" v-b-toggle.full>Full solution</b-button><b-button variant="warning" v-b-toggle.answer>Answer</b-button></b-card-text>
                <b-collapse id="answer">
                <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_ANS3_COPY_80.png')"></b-img>
                </b-collapse>
                <b-collapse id="short"><b-card-text text-tag="header">
                {{ fullSolution3[1] }}<br>{{ fullSolution3[3] }}<br>{{ fullSolution3[5] }}
                </b-card-text></b-collapse>
                <b-collapse id="full">
                <br>{{ fullSolution3[0] }}<br>{{ fullSolution3[1] }}
                <br>{{ fullSolution3[2] }}<br>{{ fullSolution3[3] }}
                <br>{{ fullSolution3[4] }}<br>{{ fullSolution3[5] }}
                </b-collapse>
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
                <b-card-text><b-button variant="info" v-b-toggle.short>Short solution</b-button><b-button variant="info" v-b-toggle.full>Full solution</b-button><b-button variant="warning" v-b-toggle.answer>Answer</b-button></b-card-text>
                <b-collapse id="answer">
                <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_ANS3_COPY_80.png')"></b-img>
                </b-collapse>
                <b-collapse id="short"><b-card-text text-tag="header">
                {{ fullSolution3[1] }}<br>{{ fullSolution3[3] }}<br>{{ fullSolution3[5] }}
                </b-card-text></b-collapse>
                <b-collapse id="full">
                <br>{{ fullSolution3[0] }}<br>{{ fullSolution3[1] }}
                <br>{{ fullSolution3[2] }}<br>{{ fullSolution3[3] }}
                <br>{{ fullSolution3[4] }}<br>{{ fullSolution3[5] }}
                </b-collapse>
                </b-card-body>
            </b-collapse>
            </b-card>
        </div>

    </div>
</template>

<script>
  import {ANG_ANGLES_Q1, ANG_ANGLES_Q2, ANG_ANGLES_Q3, ANG_ANGLES_Q4, ANG_ANGLES_Q5} from '../../QuestionsAndSolutions/Mathematics/Angles/questions.js';
  import {ANG_ANGLES_SOL2, ANG_ANGLES_SOL3} from '../../QuestionsAndSolutions/Mathematics/Angles/solutions.js';

  export default {
      name: 'topic2',
    data() {
      return {
        question1: ANG_ANGLES_Q1,
        question2: ANG_ANGLES_Q2,
        question3: ANG_ANGLES_Q3,
        question4: ANG_ANGLES_Q4,
        question5: ANG_ANGLES_Q5,
        shortSolution: `Short Solution`,
        fullSolution: `Full Solution`,
        fullSolution2: ANG_ANGLES_SOL2,
        fullSolution3: ANG_ANGLES_SOL3(),
        showShortSolution: false,
        showFullSolution: false
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




