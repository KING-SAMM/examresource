import Vue from 'vue';
import Router from 'vue-router';
import Subjects from './views/Subjects.vue';
import Chemistry from './views/Chemistry.vue';
import English from './views/English.vue';
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
import Physics from './views/Physics.vue';
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
import Math from './views/Math.vue';


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
      path: '/chemistry',
      name: 'chemistry',
      component: Chemistry
    },
    {
      path: '/english',
      name: 'english',
      component: English
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
