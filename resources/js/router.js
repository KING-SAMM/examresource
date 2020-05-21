import Vue from 'vue';
import Router from 'vue-router';
import Subjects from './views/Subjects.vue';

/* Biology */
import Biology from './views/Biology.vue';
import BTopic1 from './views/BiologyTopics/BTopic1.vue';
import BTopic2 from './views/BiologyTopics/BTopic2.vue';
import BTopic3 from './views/BiologyTopics/BTopic3.vue';
import BTopic4 from './views/BiologyTopics/BTopic4.vue';

/* Chemistry */
import Chemistry from './views/Chemistry.vue';
import Topic1 from './views/ChemistryTopics/Topic1.vue';
import Topic2 from './views/ChemistryTopics/Topic2.vue';
import Topic3 from './views/ChemistryTopics/Topic3.vue';
import Topic4 from './views/ChemistryTopics/Topic4.vue';

/* Commerce */
import Commerce from './views/Commerce.vue';
import CTopic1 from './views/CommerceTopics/CTopic1.vue';
import CTopic2 from './views/CommerceTopics/CTopic2.vue';
import CTopic3 from './views/CommerceTopics/CTopic3.vue';
import CTopic4 from './views/CommerceTopics/CTopic4.vue';

/* Economics */
import Economics from './views/Economics.vue';
import ETopic1 from './views/EconomicsTopics/ETopic1.vue';
import ETopic2 from './views/EconomicsTopics/ETopic2.vue';
import ETopic3 from './views/EconomicsTopics/ETopic3.vue';
import ETopic4 from './views/EconomicsTopics/ETopic4.vue';
import English from './views/English.vue';

/* Government */
import Government from './views/Government.vue';
import GTopic1 from './views/GovernmentTopics/GTopic1.vue';
import GTopic2 from './views/GovernmentTopics/GTopic2.vue';
import GTopic3 from './views/GovernmentTopics/GTopic3.vue';
import GTopic4 from './views/GovernmentTopics/GTopic4.vue';

/* Literature */
import Literature from './views/Literature.vue';
import LTopic1 from './views/LiteratureTopics/LTopic1.vue';
import LTopic2 from './views/LiteratureTopics/LTopic2.vue';
import LTopic3 from './views/LiteratureTopics/LTopic3.vue';
import LTopic4 from './views/LiteratureTopics/LTopic4.vue';

/* Mathematics */
import Math from './views/Math.vue';
import Angles from './views/MathTopics/Angles.vue';
import BearingsDistances from './views/MathTopics/BearingsDistances.vue';
import BinaryOperations from './views/MathTopics/BinaryOperations.vue';
import Calculus from './views/MathTopics/Calculus.vue';
import ChangeOfSubject from './views/MathTopics/ChangeOfSubject.vue';
import CircleGeometry from './views/MathTopics/CircleGeometry.vue';
import CoordinateGeo from './views/MathTopics/CoordinateGeo.vue';
import ElevationDepression from './views/MathTopics/ElevationDepression.vue';
import Factorisation from './views/MathTopics/Factorisation.vue';
import Indices from './views/MathTopics/Indices.vue';
import Inequalities from './views/MathTopics/Inequalities.vue';
import Limits from './views/MathTopics/Limits.vue';
import Loci from './views/MathTopics/Loci.vue';
import Logarithms from './views/MathTopics/Logarithms.vue';
import Matrices from './views/MathTopics/Matrices.vue';
import Maxmin from './views/MathTopics/Maxmin.vue';
import MensOfPlaneShapes from './views/MathTopics/MensOfPlaneShapes.vue';
import MensOfSolidShapes from './views/MathTopics/MensOfSolidShapes.vue';
import NumberSystems from './views/MathTopics/NumberSystems.vue';
import PermutationCombination from './views/MathTopics/PermutationCombination.vue';
import PlaneGeometry from './views/MathTopics/PlaneGeometry.vue';
import Polynomials from './views/MathTopics/Polynomials.vue';
import Probability from './views/MathTopics/Probability.vue';
import Progression from './views/MathTopics/Progression.vue';
import QuadraticEquations from './views/MathTopics/QuadraticEquations.vue';
import Sets from './views/MathTopics/Sets.vue';
import SimultaneousEquations from './views/MathTopics/SimultaneousEquations.vue';
import Statistics from './views/MathTopics/Statistics.vue';
import Surds from './views/MathTopics/Surds.vue';
import Trigonometry from './views/MathTopics/Trigonometry.vue';
import Variation from './views/MathTopics/Variation.vue';

/* Physics */
import Physics from './views/Physics.vue';
import AC from './views/PhysicsTopics/AC.vue';
import CircularMotion from './views/PhysicsTopics/CircularMotion.vue';
import CurrentElectricity from './views/PhysicsTopics/CurrentElectricity.vue';
import DimensionalAnalysis from './views/PhysicsTopics/DimensionalAnalysis.vue'
import Elasticity from './views/PhysicsTopics/Elasticity.vue';
import ElectromagneticInduction from './views/PhysicsTopics/ElectromagneticInduction.vue';
import Electrostatics from './views/PhysicsTopics/Electrostatics.vue';
import GasLaws from './views/PhysicsTopics/GasLaws.vue';
import HeatEnergy from './views/PhysicsTopics/HeatEnergy.vue';
import LinearMotion from './views/PhysicsTopics/LinearMotion.vue';
import MagneticFields from './views/PhysicsTopics/MagneticFields.vue';
import Measurements from './views/PhysicsTopics/Measurements.vue';
import QuantumMechanics from './views/PhysicsTopics/QuantumMechanics.vue';
import Radioactivity from './views/PhysicsTopics/Radioactivity.vue';
import Semiconductors from './views/PhysicsTopics/Semiconductors.vue';
import SimpleHarmonicMotion from './views/PhysicsTopics/SimpleHarmonicMotion.vue';
import Temperature from './views/PhysicsTopics/Temperature.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'subjects',
      component: Subjects
    },
    {
      path: '/biology',
      name: 'biologyview',
      component: () => import('./views/BiologyView.vue'),
      children: [
        {
          path: '',
          name: 'biology',
          component: Biology
        },
        {
          path: 'topic1',
          name: 'topic1',
          component: BTopic1
        },
        {
          path: 'topic2',
          name: 'topic2',
          component: BTopic2
        },
        {
          path: 'topic3',
          name: 'topic',
          component: BTopic3
        },
        {
          path: 'topic4',
          name: 'topic4',
          component: BTopic4
        }
      ]
    },
    {
      path: '/chemistry',
      name: 'chemistryview',
      component: () => import('./views/ChemistryView.vue'),
      children: [
        {
          path: '',
          name: 'chemistry',
          component: Chemistry
        },
        {
          path: 'topic1',
          name: 'topic1',
          component: Topic1
        },
        {
          path: 'topic2',
          name: 'topic2',
          component: Topic2
        },
        {
          path: 'topic3',
          name: 'topic',
          component: Topic3
        },
        {
          path: 'topic4',
          name: 'topic4',
          component: Topic4
        }
      ]
    },
    {
      path: '/commerce',
      name: 'commerceview',
      component: () => import('./views/CommerceView.vue'),
      children: [
        {
          path: '',
          name: 'commerce',
          component: Commerce
        },
        {
          path: 'topic1',
          name: 'topic1',
          component: CTopic1
        },
        {
          path: 'topic2',
          name: 'topic2',
          component: CTopic2
        },
        {
          path: 'topic3',
          name: 'topic',
          component: CTopic3
        },
        {
          path: 'topic4',
          name: 'topic4',
          component: CTopic4
        }
      ]
    },
    {
      path: '/economics',
      name: 'economicsview',
      component: () => import('./views/EconomicsView.vue'),
      children: [
        {
          path: '',
          name: 'economics',
          component: Economics
        },
        {
          path: 'topic1',
          name: 'topic1',
          component: ETopic1
        },
        {
          path: 'topic2',
          name: 'topic2',
          component: ETopic2
        },
        {
          path: 'topic3',
          name: 'topic',
          component: ETopic3
        },
        {
          path: 'topic4',
          name: 'topic4',
          component: ETopic4
        }
      ]
    },
    {
      path: '/english',
      name: 'english',
      component: English
    },
    {
      path: '/government',
      name: 'governmentview',
      component: () => import('./views/GovernmentView.vue'),
      children: [
        {
          path: '',
          name: 'government',
          component: Government
        },
        {
          path: 'topic1',
          name: 'topic1',
          component: GTopic1
        },
        {
          path: 'topic2',
          name: 'topic2',
          component: GTopic2
        },
        {
          path: 'topic3',
          name: 'topic',
          component: GTopic3
        },
        {
          path: 'topic4',
          name: 'topic4',
          component: GTopic4
        }
      ]
    },
    {
      path: '/literature',
      name: 'literatureview',
      component: () => import('./views/LiteratureView.vue'),
      children: [
        {
          path: '',
          name: 'literature',
          component: Literature
        },
        {
          path: 'topic1',
          name: 'topic1',
          component: LTopic1
        },
        {
          path: 'topic2',
          name: 'topic2',
          component: LTopic2
        },
        {
          path: 'topic3',
          name: 'topic',
          component: LTopic3
        },
        {
          path: 'topic4',
          name: 'topic4',
          component: LTopic4
        }
      ]
    },
    {
      path: '/physics',
      name: 'physicsview',
      component: () => import('./views/PhysicsView.vue'),
      children: [
        {
          path: '',
          name: 'physics',
          component: Physics
        },
        {
          path: 'ac-circuits',
          name: 'ac-circuits',
          component: AC
        },
        {
          path: 'circular-motion',
          name: 'circular-motion',
          component: CircularMotion
        },
        {
          path: 'current-electricity',
          name: 'current-electricity',
          component: CurrentElectricity
        },
        {
          path: 'dimensional-analysis',
          name: 'dimensional-analysis',
          component: DimensionalAnalysis
        },
        {
          path: 'elasticity',
          name: 'elasticity',
          component: Elasticity
        },
        {
          path: 'electromagnetic-induction',
          name: 'electromagnetic-induction',
          component: ElectromagneticInduction
        },
        {
          path: 'electrostatics',
          name: 'electrostatics',
          component: Electrostatics
        },
        {
          path: 'gas-laws',
          name: 'gas-laws',
          component: GasLaws
        },
        {
          path: 'heat-energy',
          name: 'heat-energy',
          component: HeatEnergy
        },
        {
          path: 'linear-motion',
          name: 'linear-motion',
          component: LinearMotion
        },
        {
          path: 'measurements',
          name: 'measurements',
          component: Measurements
        },
        {
          path: 'magnetic-fields',
          name: 'magnetic-fields',
          component: MagneticFields
        },
        {
          path: 'quantum-mechanics',
          name: 'quantum-mechanics',
          component: QuantumMechanics
        },
        {
          path: 'nuclear-energy-and-radioactivity',
          name: 'nuclear-energy-and-radioactivity',
          component: Radioactivity
        },
        {
          path: 'semiconductors',
          name: 'semiconductors',
          component: Semiconductors
        },
        {
          path: 'simple-harmonic-motion',
          name: 'simple-harmonic-motion',
          component: SimpleHarmonicMotion
        },
        {
          path: 'temperature-and-thermometry',
          name: 'temperature-and-thermometry',
          component: Temperature
        }
      ]
    },
    {
      path: '/math',
      name: 'mathview',
      component: () => import('./views/MathView.vue'),
      children: [
        {
          path: '',
          name: 'math',
          component: Math
        },
        {
          path: 'angles',
          name: 'angles',
          component: Angles
        },
        {
          path: 'elevation-and-depression',
          name: 'elevation-and-depression',
          component: ElevationDepression
        },
        {
          path: 'bearings-and-distances',
          name: 'bearings-and-distances',
          component: BearingsDistances
        },
        {
          path: 'binary-operations',
          name: 'binary-operations',
          component: BinaryOperations
        },
        {
          path: 'calculus',
          name: 'calculus',
          component: Calculus
        },
        {
          path: 'change-of-subject-of-formula',
          name: 'change-of-subject-of-formula',
          component: ChangeOfSubject
        },
        {
          path: 'circle-geometry',
          name: 'circle-geometry',
          component: CircleGeometry
        },
        {
          path: 'coordinategeo',
          name: 'coordinategeo',
          component: CoordinateGeo
        },
        {
          path: 'factorisation',
          name: 'factorisation',
          component: Factorisation
        },
        {
          path: 'indices',
          name: 'indices',
          component: Indices
        },
        {
          path: 'inequalities',
          name: 'inequalities',
          component: Inequalities
        },
        {
          path: 'limits',
          name: 'limits',
          component: Limits
        },
        {
          path: 'loci',
          name: 'loci',
          component: Loci
        },
        {
          path: 'logarithms',
          name: 'logarithms',
          component: Logarithms
        },
        {
          path: 'matrices',
          name: 'matrices',
          component: Matrices
        },
        {
          path: 'maxmin',
          name: 'maxmin',
          component: Maxmin
        },
        {
          path: 'mensuration-of-plane-shapes',
          name: 'mensuration-of-plane-shapes',
          component: MensOfPlaneShapes
        },
        {
          path: 'mensuration-of-solid-shapes',
          name: 'mensuration-of-solid-shapes',
          component: MensOfSolidShapes
        },
        {
          path: 'number-systems',
          name: 'number-systems',
          component: NumberSystems
        },
        {
          path: 'permutation-and-combination',
          name: 'permutation-and-combination',
          component: PermutationCombination
        },
        {
          path: 'plane-geometry',
          name: 'plane-geometry',
          component: PlaneGeometry
        },
        {
          path: 'polynomials',
          name: 'polynomials',
          component: Polynomials
        },
        {
          path: 'probability',
          name: 'probability',
          component: Probability
        },
        {
          path: 'progression',
          name: 'progression',
          component: Progression
        },
        {
          path: 'quadratic-equations',
          name: 'quadratic-equations',
          component: QuadraticEquations
        },
        {
          path: 'sets',
          name: 'sets',
          component: Sets
        },
        {
          path: 'simultaneous-equations',
          name: 'simultaneous-equations',
          component: SimultaneousEquations
        },
        {
          path: 'statistics',
          name: 'statistics',
          component: Statistics
        },
        {
          path: 'surds',
          name: 'surds',
          component: Surds
        },
        {
          path: 'trigonometry',
          name: 'trigonometry',
          component: Trigonometry
        },
        {
          path: 'variation',
          name: 'variation',
          component: Variation
        }
      ]
    }
  ],
  linkActiveClass: 'active'
});
