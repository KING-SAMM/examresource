<template>
    <div>
        <b-navbar-nav>
            <b-nav-item-dropdown text="Topics">
                <b-dropdown-item to="/physics/ac-circuits" exact exact-active-class="active">A.C Circuits</b-dropdown-item>
                <b-dropdown-item to="/physics/application-of-light-waves" exact exact-active-class="active">Application of Light Waves</b-dropdown-item>
                <b-dropdown-item to="/physics/circular-and-shm" exact exact-active-class="active">Circular and Simple Harmonic Motion</b-dropdown-item>
                <b-dropdown-item to="/physics/conduction-through-fluids" exact exact-active-class="active">Conduction Through Fluids</b-dropdown-item>
                <b-dropdown-item to="/physics/current-electricity" exact exact-active-class="active">Current Electricity</b-dropdown-item>
                <b-dropdown-item to="/physics/electric-field" exact exact-active-class="active">Electric Field</b-dropdown-item>
                <b-dropdown-item to="/physics/electrostatics" exact exact-active-class="active">Electrostatics</b-dropdown-item>
                <b-dropdown-item to="/physics/electromagnetic-fields" exact exact-active-class="active">Electromagnetic Fields</b-dropdown-item>
                <b-dropdown-item to="/physics/elasticity-matter-crystal-structure" exact exact-active-class="active">Elasticity/Nature of Matter/<br>Crystal Structure</b-dropdown-item>
                <b-dropdown-item to="/physics/equilibrium" exact exact-active-class="active">Equilibrium</b-dropdown-item>
                <b-dropdown-item to="/physics/expansivity" exact exact-active-class="active">Expansivity</b-dropdown-item>
                <b-dropdown-item to="/physics/fluids-at-rest-or-in-motion" exact exact-active-class="active">Fluids at Rest or in Motion</b-dropdown-item>
                <b-dropdown-item to="/physics/gas-laws" exact exact-active-class="active">Gas Laws</b-dropdown-item>
                <b-dropdown-item to="/physics/gravitational-field" exact exact-active-class="active">Gravitational Field</b-dropdown-item>
                <b-dropdown-item to="/physics/heat-energy" exact exact-active-class="active">Heat Energy</b-dropdown-item>
                <b-dropdown-item to="/physics/measurements" exact exact-active-class="active">Measurementsa</b-dropdown-item>
                <b-dropdown-item to="/physics/motion" exact exact-active-class="active">Motion</b-dropdown-item>
                <b-dropdown-item to="/physics/optical-instruments" exact exact-active-class="active">Optical Instruments</b-dropdown-item>
                <b-dropdown-item to="/physics/pressure-in-fluids" exact exact-active-class="active">Pressure in Fluids</b-dropdown-item>
                <b-dropdown-item to="/physics/qm-semiconductors" exact exact-active-class="active">Quantum Mechanics and Semiconductors</b-dropdown-item>
                <b-dropdown-item to="/physics/radioactivity-and-nuclear-energy" exact exact-active-class="active">Radioactivity and Nuclear Energy</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </div>
</template>

<script>
export default {
    name: 'PhysicsLinks'
}
</script>