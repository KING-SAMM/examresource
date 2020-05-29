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
          <b-list-group-item to="/physics/ac-circuits">A.C Circuits</b-list-group-item>
          <b-list-group-item to="/physics/application-of-light-waves" variant="primary">Application of Light Waves</b-list-group-item>
          <b-list-group-item to="/physics/circular-and-shm" variant="secondary">Circular and Simple Harmonic Motion</b-list-group-item>
          <b-list-group-item to="/physics/conduction-through-fluids" variant="success">Conduction Through Fluids</b-list-group-item>
          <b-list-group-item to="/physics/current-electricity" variant="danger">Current Electricity</b-list-group-item>
          <b-list-group-item to="/physics/electric-field" variant="warning">Electric Field</b-list-group-item>
          <b-list-group-item to="/physics/electrostatics" variant="info">Electrostatics</b-list-group-item>
          <b-list-group-item to="/physics/electromagnetic-fields" variant="light">Electromagnetic Fields</b-list-group-item>
          <b-list-group-item to="/physics/elasticity-matter-crystal-structure" variant="dark">Elasticity/Nature of Matter/Crystal Structure</b-list-group-item>
          <b-list-group-item to="/physics/equilibrium">Equilibrium</b-list-group-item>
          <b-list-group-item to="/physics/expansivity" variant="primary">Expansivity</b-list-group-item>
          <b-list-group-item to="/physics/fluids-at-rest-or-in-motion" variant="secondary">Fluids at Rest or in Motion</b-list-group-item>
          <b-list-group-item to="/physics/gas-laws" variant="success">Gas Laws</b-list-group-item>
          <b-list-group-item to="/physics/gravitational-field" variant="danger">Gravitational Field</b-list-group-item>
          <b-list-group-item to="/physics/heat-energy" variant="warning">Heat Energy</b-list-group-item>
          <b-list-group-item to="/physics/measurements" variant="info">Measurements</b-list-group-item>
          <b-list-group-item to="/physics/motion" variant="light">Motion</b-list-group-item>
          <b-list-group-item to="/physics/optical-instruments" variant="dark">Optical Instruments</b-list-group-item>
          <b-list-group-item to="/physics/pressure-in-fluids">Pressure in Fluids</b-list-group-item>
          <b-list-group-item to="/physics/qm-semiconductors" variant="primary">Quantum Mechanics and Semiconductors</b-list-group-item>
          <b-list-group-item to="/physics/radioactivity-and-nuclear-energy" variant="secondary">Radioactivity and Nuclear Energy</b-list-group-item>
          <b-list-group-item to="/physics/reflection-of-light" variant="success">Reflection of Light</b-list-group-item>
          <b-list-group-item to="/physics/refraction-of-light" variant="danger">Refraction of Light</b-list-group-item>
          <b-list-group-item to="/physics/scalars-and-vectors" variant="warning">Scalars and Vectors</b-list-group-item>
          <b-list-group-item to="/physics/simple-machines" variant="info">Simple Machines</b-list-group-item>
          <b-list-group-item to="/physics/sound-waves" variant="light">Sound Waves</b-list-group-item>
          <b-list-group-item to="/physics/waves" variant="dark">Waves</b-list-group-item>
          <b-list-group-item to="/physics/work-energy-power">Work, Energy and Power</b-list-group-item>
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