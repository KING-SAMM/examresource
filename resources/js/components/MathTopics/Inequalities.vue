<template>
  <!-- <transition name="slide"> -->
    <div class="container">
    <h1>Inequalities Questions</h1>
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
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_ANS1_80.png')"></b-img>
            </b-collapse>
            <b-collapse id="short"><b-card-text>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_SOL1_SHORT80.png')"></b-img>
              <!-- <br>{{ fullSolution1[3] }}<br>{{ fullSolution1[4] }}
              <br>{{ fullSolution1[5] }}<br>{{ fullSolution1[8] }}
              <br>{{ fullSolution1[10] }}<br>{{ fullSolution1[11] }}
              <br>{{ fullSolution1[13] }} -->
              <div>&nbsp;</div>
            </b-card-text></b-collapse>
            <b-collapse id="full">
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_SOL1_80.png')"></b-img>
              <!-- <br>{{ fullSolution1[1] }}<br>{{ fullSolution1[2] }}
              <br>{{ fullSolution1[3] }}<br>{{ fullSolution1[4] }}
              <br>{{ fullSolution1[5] }}<br>{{ fullSolution1[6] }}
              <br>{{ fullSolution1[7] }}<br>{{ fullSolution1[8] }}
              <br>{{ fullSolution1[9] }}<br>{{ fullSolution1[10] }}
              <br>{{ fullSolution1[11] }}<br>{{ fullSolution1[12] }} -->
            </b-collapse>
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
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_ANS2_80.png')"></b-img>
            </b-collapse>
            <b-collapse id="short">
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_SOL2_SHORT80.png')"></b-img>
              <div>&nbsp;</div>
            </b-collapse>
            <b-collapse id="full">
               <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_SOL2_80.png')"></b-img>
            </b-collapse>
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
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_SOL3_SHORT80.png')"></b-img>
              <div>&nbsp;</div>
            </b-card-text></b-collapse>
            <b-collapse id="full">
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_SOL3_80.png')"></b-img>
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
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_ANS4_80.png')"></b-img>
            </b-collapse>
            <b-collapse id="short">
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_SOL4_SHORT80.png')"></b-img>
              <div>&nbsp;</div>
            </b-collapse>
            <b-collapse id="full">
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_SOL4_80.png')"></b-img>
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
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_SOL3_SHORT80.png')"></b-img>
              <div>&nbsp;</div>
            </b-card-text></b-collapse>
            <b-collapse id="full">
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_SOL3_80.png')"></b-img>
            </b-collapse>
            </b-card-body>
        </b-collapse>
        </b-card>

    </div>

    </div>
  <!-- </transition> -->
</template>

<script>
import {FACT_INEQUALITIES_Q1, FACT_INEQUALITIES_Q2, FACT_INEQUALITIES_Q3, FACT_INEQUALITIES_Q4, FACT_INEQUALITIES_Q5} from '../../QuestionsAndSolutions/Mathematics/Factorisation/questions.js';
import {GEO_COORD_SOL1, GEO_COORD_SOL2, GEO_COORD_SOL3, GEO_COORD_SOL4} from '../../QuestionsAndSolutions/Mathematics/Geometry/solutions.js';
  
  export default {
    data() {
      return {
        question1: FACT_INEQUALITIES_Q1,
        question2: FACT_INEQUALITIES_Q2,
        question3: FACT_INEQUALITIES_Q3,
        question4: FACT_INEQUALITIES_Q4,
        question5: FACT_INEQUALITIES_Q5,
        fullSolution1: GEO_COORD_SOL1(),
        fullSolution2: GEO_COORD_SOL2,
        fullSolution3: GEO_COORD_SOL3(),
        fullSolution4: GEO_COORD_SOL4,
        showShortSolution: false,
        showFullSolution: false,
        mainProps: { blank: true, width: 75, height: 75, class: 'm1' }
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

