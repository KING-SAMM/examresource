<template>
  <!-- <transition name="slide"> -->
    <div class="container">
        <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">ExamResource</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item-dropdown text="Select a Subject">
                <b-dropdown-item to="/biology" exact exact-active-class="active">Biology</b-dropdown-item>
                <b-dropdown-item to="/chemistry" exact exact-active-class="active">Chemistry</b-dropdown-item>
                <b-dropdown-item to="/commerce" exact exact-active-class="active">Commerce</b-dropdown-item>
                <b-dropdown-item to="/economics" exact exact-active-class="active">Economics</b-dropdown-item>
                <b-dropdown-item to="/english" exact exact-active-class="active">English</b-dropdown-item>
                <b-dropdown-item to="/government" exact exact-active-class="active">Government</b-dropdown-item>
                <b-dropdown-item to="/literature" exact exact-active-class="active">Literature</b-dropdown-item>
                <b-dropdown-item to="/math" exact exact-active-class="active">Math</b-dropdown-item>
                <b-dropdown-item to="/physics" exact exact-active-class="active">Physics</b-dropdown-item>
              </b-nav-item-dropdown>
             </b-navbar-nav>
             
             <b-navbar-nav>
               <b-nav-item-dropdown text="Topics">
                <b-dropdown-item to="/math/angles" exact exact-active-class="active">Angles</b-dropdown-item>
                <b-dropdown-item to="/math/elevation-and-depression" exact exact-active-class="active">Angles of Elevation and Depression</b-dropdown-item>
                <b-dropdown-item to="/math/bearings-and-distances" exact exact-active-class="active">Bearings and Distances</b-dropdown-item>
                <b-dropdown-item to="/math/binary-operations" exact exact-active-class="active">Binary Operations</b-dropdown-item>
                <b-dropdown-item to="/math/calculus" exact exact-active-class="active">Calculus</b-dropdown-item>
                <b-dropdown-item to="/math/change-of-subject-of-formula" exact exact-active-class="active">Change of Subject of Formula</b-dropdown-item>
                <b-dropdown-item to="/math/circle-geometry" exact exact-active-class="active">Circle Geometry</b-dropdown-item>
                <b-dropdown-item to="/math/coordinategeo" exact exact-active-class="active">Coordinate Geometry</b-dropdown-item>
                <b-dropdown-item to="/math/factorisation" exact exact-active-class="active">Factorisation</b-dropdown-item>
                <b-dropdown-item to="/math/inequalities" exact exact-active-class="active">Inequalities</b-dropdown-item>
                <b-dropdown-item to="/math/indices" exact exact-active-class="active">Indices</b-dropdown-item>
                <b-dropdown-item to="/math/limits" exact exact-active-class="active">Limits</b-dropdown-item>
                <b-dropdown-item to="/math/loci" exact exact-active-class="active">Loci</b-dropdown-item>
                <b-dropdown-item to="/math/logarithms" exact exact-active-class="active">Logarithm</b-dropdown-item>
                <b-dropdown-item to="/math/matrices" exact exact-active-class="active">Matrices and Determinants</b-dropdown-item>
                <b-dropdown-item to="/math/maxmin" exact exact-active-class="active">Maxima and Minima</b-dropdown-item>
                <b-dropdown-item to="/math/mensuration-of-plane-shapes" exact exact-active-class="active">Mensuration of Plane Shapes</b-dropdown-item>
                <b-dropdown-item to="/math/mensuration-of-solid-shapes" exact exact-active-class="active">Mensuration of Solid Shapes</b-dropdown-item>
                <b-dropdown-item to="/math/number-systems" exact exact-active-class="active">Number Bases</b-dropdown-item>
                <b-dropdown-item to="/math/permutation-and-combination" exact exact-active-class="active">Permutation and Combination</b-dropdown-item>
                <b-dropdown-item to="/math/plane-geometry" exact exact-active-class="active">Plane Geometry</b-dropdown-item>
              </b-nav-item-dropdown>
             </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
            <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
        </b-navbar>
    </div>
    <h1>Loci Questions</h1>
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
              <b-img :src="require('../../Mathematics/Geometry/GEO_COORD_ANS1_80.png')"></b-img>
            </b-collapse>
            <b-collapse id="short"><b-card-text>
              <b-img :src="require('../../Mathematics/Geometry/GEO_COORD_SOL1_SHORT80.png')"></b-img>
              <!-- <br>{{ fullSolution1[3] }}<br>{{ fullSolution1[4] }}
              <br>{{ fullSolution1[5] }}<br>{{ fullSolution1[8] }}
              <br>{{ fullSolution1[10] }}<br>{{ fullSolution1[11] }}
              <br>{{ fullSolution1[13] }} -->
              <div>&nbsp;</div>
            </b-card-text></b-collapse>
            <b-collapse id="full">
              <b-img :src="require('../../Mathematics/Geometry/GEO_COORD_SOL1_80.png')"></b-img>
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
              <b-img :src="require('../../Mathematics/Geometry/GEO_COORD_ANS2_80.png')"></b-img>
            </b-collapse>
            <b-collapse id="short">
              <b-img :src="require('../../Mathematics/Geometry/GEO_COORD_SOL2_SHORT80.png')"></b-img>
              <div>&nbsp;</div>
            </b-collapse>
            <b-collapse id="full">
               <b-img :src="require('../../Mathematics/Geometry/GEO_COORD_SOL2_80.png')"></b-img>
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
              <b-img :src="require('../../Mathematics/Geometry/GEO_COORD_ANS3_COPY_80.png')"></b-img>
            </b-collapse>
            <b-collapse id="short"><b-card-text text-tag="header">
              <b-img :src="require('../../Mathematics/Geometry/GEO_COORD_SOL3_SHORT80.png')"></b-img>
              <div>&nbsp;</div>
            </b-card-text></b-collapse>
            <b-collapse id="full">
              <b-img :src="require('../../Mathematics/Geometry/GEO_COORD_SOL3_80.png')"></b-img>
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
              <b-img :src="require('../../Mathematics/Geometry/GEO_COORD_ANS4_80.png')"></b-img>
            </b-collapse>
            <b-collapse id="short">
              <b-img :src="require('../../Mathematics/Geometry/GEO_COORD_SOL4_SHORT80.png')"></b-img>
              <div>&nbsp;</div>
            </b-collapse>
            <b-collapse id="full">
              <b-img :src="require('../../Mathematics/Geometry/GEO_COORD_SOL4_80.png')"></b-img>
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
              <b-img :src="require('../../Mathematics/Geometry/GEO_COORD_ANS3_COPY_80.png')"></b-img>
            </b-collapse>
            <b-collapse id="short"><b-card-text text-tag="header">
              <b-img :src="require('../../Mathematics/Geometry/GEO_COORD_SOL3_SHORT80.png')"></b-img>
              <div>&nbsp;</div>
            </b-card-text></b-collapse>
            <b-collapse id="full">
              <b-img :src="require('../../Mathematics/Geometry/GEO_COORD_SOL3_80.png')"></b-img>
            </b-collapse>
            </b-card-body>
        </b-collapse>
        </b-card>

    </div>

    </div>
  <!-- </transition> -->
</template>

<script>
import {GEO_LOCI_Q1, GEO_LOCI_Q2, GEO_LOCI_Q3, GEO_LOCI_Q4, GEO_LOCI_Q5} from '../../Mathematics/Geometry/questions.js';
import {GEO_COORD_SOL1, GEO_COORD_SOL2, GEO_COORD_SOL3, GEO_COORD_SOL4} from '../../Mathematics/Geometry/solutions.js';
  
  export default {
    data() {
      return {
        question1: GEO_LOCI_Q1,
        question2: GEO_LOCI_Q2,
        question3: GEO_LOCI_Q3,
        question4: GEO_LOCI_Q4,
        question5: GEO_LOCI_Q5,
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

