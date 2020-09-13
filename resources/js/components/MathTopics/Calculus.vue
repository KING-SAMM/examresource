<template>
  <!-- <transition name="slide"> -->
    <div class="container">
    <h1>Calculus Questions</h1>
  
    <div class="input-group">
        <!-- <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-user"></i></span>
        </div> -->
        <p class="para">Click to view a question with associated solutions</p>
        <p><math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mn>2</mn></mfrac></math></p>
    </div>
    <div role="tablist">
        <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-1 variant="info">Question 1</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <!-- <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text> -->
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_DIFF_1_Q1_85.png')"></b-img>
            </div>
        
            <b-card-text><b-button variant="info" v-b-toggle.short>Short solution</b-button><b-button variant="info" v-b-toggle.full>Full solution</b-button><b-button variant="warning" v-b-toggle.answer>Answer</b-button></b-card-text>
            <b-collapse id="answer">
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_ANS1_80.png')"></b-img>
            </b-collapse>
            <b-collapse id="short"><b-card-text>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_SOL1_SHORT80.png')"></b-img>
            
              <div>&nbsp;</div>
            </b-card-text></b-collapse>
            <b-collapse id="full">
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_SOL1_80.png')"></b-img>
           
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
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_DIFF_2_Q2_85.png')"></b-img>
            </div>
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
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_INTEG_1_Q3_85.png')"></b-img>
            </div>
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
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_DIFF_3_Q4_85.png')"></b-img>
            </div>
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
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_INTEG_2_Q5_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-6 variant="info">Question 6</b-button>
        </b-card-header>
        <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_INTEG_3_Q6_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-7 variant="info">Question 7</b-button>
        </b-card-header>
        <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_DIFF_4_Q7_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-8 variant="info">Question 8</b-button>
        </b-card-header>
        <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_INTEG_4_Q8_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-9 variant="info">Question 9</b-button>
        </b-card-header>
        <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_DIFF_5_Q9_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-10 variant="info">Question 10</b-button>
        </b-card-header>
        <b-collapse id="accordion-10" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_INTEG_5_Q10_85.png')"></b-img>
            </div>
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

    <div class="input-group">
      <p class="para">Advanced Questions</p>
    </div>

    <div role="tablist">
        <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-11 variant="info">Question 11</b-button>
        </b-card-header>
        <b-collapse id="accordion-11" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <!-- <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text> -->
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_DIFF_6_ADV_Q11_85.png')"></b-img>
            </div>
        
            <b-card-text><b-button variant="info" v-b-toggle.short>Short solution</b-button><b-button variant="info" v-b-toggle.full>Full solution</b-button><b-button variant="warning" v-b-toggle.answer>Answer</b-button></b-card-text>
            <b-collapse id="answer">
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_ANS1_80.png')"></b-img>
            </b-collapse>
            <b-collapse id="short"><b-card-text>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_SOL1_SHORT80.png')"></b-img>
            
              <div>&nbsp;</div>
            </b-card-text></b-collapse>
            <b-collapse id="full">
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Geometry/GEO_COORD_SOL1_80.png')"></b-img>
           
            </b-collapse>
            </b-card-body>
        </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-12 variant="info">Question 12</b-button>
        </b-card-header>
        <b-collapse id="accordion-12" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_INTEG_6_ADV_Q12_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-13 variant="info">Question 13</b-button>
        </b-card-header>
        <b-collapse id="accordion-13" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_INTEG_7_ADV_Q13_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-14 variant="info">Question 14</b-button>
        </b-card-header>
        <b-collapse id="accordion-14" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_DIFF_7_ADV_Q14_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-15 variant="info">Question 15</b-button>
        </b-card-header>
        <b-collapse id="accordion-15" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_DIFF_8_ADV_Q15_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-16 variant="info">Question 16</b-button>
        </b-card-header>
        <b-collapse id="accordion-16" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_INTEG_8_ADV_Q16_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-17 variant="info">Question 17</b-button>
        </b-card-header>
        <b-collapse id="accordion-17" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_INTEG_9_Q17_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-18 variant="info">Question 18</b-button>
        </b-card-header>
        <b-collapse id="accordion-18" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_DIFF_9_Q18_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-19 variant="info">Question 19</b-button>
        </b-card-header>
        <b-collapse id="accordion-19" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_INTEG_10_ADV_Q19_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-20 variant="info">Question 20</b-button>
        </b-card-header>
        <b-collapse id="accordion-20" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_DIFF_10_ADV_Q20_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-21 variant="info">Question 21</b-button>
        </b-card-header>
        <b-collapse id="accordion-21" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_DIFF_11_ADV_Q21_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-22 variant="info">Question 22</b-button>
        </b-card-header>
        <b-collapse id="accordion-22" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_INTEG_11_ADV_Q22_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-23 variant="info">Question 23</b-button>
        </b-card-header>
        <b-collapse id="accordion-23" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_INTEG_12_ADV_Q23_85.png')"></b-img>
            </div>
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
            <b-button block href="#" v-b-toggle.accordion-24 variant="info">Question 24</b-button>
        </b-card-header>
        <b-collapse id="accordion-24" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <div>
              <b-img :src="require('../../QuestionsAndSolutions/Mathematics/Calculus/Questions/CAL_INTEG_13_ADV_Q24_85.png')"></b-img>
            </div>
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

// import {CAL_DIFF_Q1, CAL_DIFF_Q2, CAL_DIFF_Q3, CAL_DIFF_Q4, CAL_DIFF_Q5} from '../../QuestionsAndSolutions/Mathematics/Calculus/questions.js';
// import {CAL_INTEG_Q1, CAL_INTEG_Q2, CAL_INTEG_Q3, CAL_INTEG_Q4, CAL_INTEG_Q5} from '../../QuestionsAndSolutions/Mathematics/Calculus/questions.js';
// import {GEO_COORD_SOL1, GEO_COORD_SOL2, GEO_COORD_SOL3, GEO_COORD_SOL4} from '../../QuestionsAndSolutions/Mathematics/Geometry/solutions.js';
  
  export default {
    data() {
      return {
        // question1: CAL_DIFF_Q1,
        // question2: CAL_DIFF_Q2,
        // question3: CAL_INTEG_Q1, 
        // question4: CAL_DIFF_Q3,  
        // question5: CAL_INTEG_Q2,   
        // question6: CAL_INTEG_Q3,
        // question7: CAL_DIFF_Q4,
        // question8: CAL_INTEG_Q4,
        // question9: CAL_DIFF_Q5,
        // question10: CAL_INTEG_Q5,
        // fullSolution1: GEO_COORD_SOL1(),
        // fullSolution2: GEO_COORD_SOL2,
        // fullSolution3: GEO_COORD_SOL3(),
        // fullSolution4: GEO_COORD_SOL4,
        // showShortSolution: false,
        // showFullSolution: false,
        mainProps: { blank: true, width: 75, height: 75, class: 'm1' }
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }

  p.para {
    font-size: 1.5rem;
  }
</style>

