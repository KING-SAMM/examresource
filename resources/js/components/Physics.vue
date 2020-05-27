<template>
    <div>
        <h1>Physics Topics</h1>
        <div class="input-group">
            <!-- <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
            </div> -->
            <p>Start exploring Physics resources and questions by topic</p>
        </div>

        <b-list-group>
          <b-list-group-item to="/physics/measurements">Measurements</b-list-group-item>
          <b-list-group-item to="/physics/dimensional-analysis" variant="primary">Dimensional Analysis</b-list-group-item>
          <b-list-group-item to="/physics/elasticity" variant="secondary">Elasticity</b-list-group-item>
          <b-list-group-item to="/physics/surface-tension" variant="success">Surface Tension</b-list-group-item>
          <b-list-group-item to="/physics/matter" variant="danger">Matter</b-list-group-item>
          <b-list-group-item to="/physics/friction-and-viscosity" variant="warning">Friction and Viscosity</b-list-group-item>
          <b-list-group-item to="/physics/floatation" variant="info">Floatation</b-list-group-item>
          <b-list-group-item to="/physics/electrostatics" variant="light">Electrostatics</b-list-group-item>
          <b-list-group-item to="/physics/temperature-and-thermometry" variant="dark">Temperature and Thermometry</b-list-group-item>
          <b-list-group-item to="/physics/heat-energy">Heat Energy</b-list-group-item>
          <b-list-group-item to="/physics/gas-laws" variant="primary">Gas Laws</b-list-group-item>
          <b-list-group-item to="/physics/linear-motion" variant="secondary">Linear Motion</b-list-group-item>
          <b-list-group-item to="/physics/circular-motion" variant="success">Circular Motion</b-list-group-item>
          <b-list-group-item to="/physics/simple-harmonic-motion" variant="danger">Simplen Harmonic Motion</b-list-group-item>
          <b-list-group-item to="/physics/simple-machines" variant="warning">Simple Machines</b-list-group-item>
          <b-list-group-item to="/physics/pressure-in-fluids" variant="info">Pressure in Fluids</b-list-group-item>
          <b-list-group-item to="/physics/moments-and-equilibrium" variant="light">Moments and Equilibrium</b-list-group-item>
          <b-list-group-item to="/physics/work-energy-and-power" variant="dark">Work Energy and Power</b-list-group-item>
          <b-list-group-item to="/physics/expansivity">Expansivity</b-list-group-item>
          <b-list-group-item to="/physics/current-electricity" variant="primary">Current Electricity</b-list-group-item>
          <b-list-group-item to="/physics/magnetic-fields" variant="secondary">Magnets and Magnetic Fields</b-list-group-item>
          <b-list-group-item to="/physics/electromagnetic-induction" variant="success">Electromagnetic Induction</b-list-group-item>
          <b-list-group-item to="/physics/ac-circuits" variant="danger">A.C. Circuits</b-list-group-item>
          <b-list-group-item to="/physics/capacitors-and-parallel-plate-capacitors" variant="warning">Capacitors and Parallel-Plate Capacitors</b-list-group-item>
          <b-list-group-item to="/physics/waves" variant="info">Waves</b-list-group-item>
          <b-list-group-item to="/physics/light-and-optical-instruments" variant="light">Light and Optical Instruments</b-list-group-item>
          <b-list-group-item to="/physics/fields" variant="dark">Fields</b-list-group-item>
          <b-list-group-item to="/physics/nuclear-energy-and-radioactivity">Nuclear Energy and Radioactivity</b-list-group-item>
          <b-list-group-item to="/physics/semiconductors" variant="primary">Semiconductors</b-list-group-item>
          <b-list-group-item to="/physics/quantum-mechanics" variant="secondary">Quantum Mechanics</b-list-group-item>
          <!-- <b-list-group-item to="/physics/quantum-mechanics" variant="secondary">Quantum Mechanics</b-list-group-item> -->
          <!-- <b-list-group-item to="/physics/heisenbergs-uncertainty-principle" variant="success">Heisenberg's Uncertainty Principle</b-list-group-item> -->
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