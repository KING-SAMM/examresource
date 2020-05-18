<template>
    <div class="container">
        <div>
          <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">ExamResource</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item to="/chemistry" exact exact-active-class="active">Chemistry</b-nav-item>
                <b-nav-item to="/english" exact exact-active-class="active">English</b-nav-item>
                <b-nav-item to="/math" exact exact-active-class="active">Math</b-nav-item>
                <b-nav-item to="/physics" exact exact-active-class="active">Physics</b-nav-item>
                <b-nav-item to="/" exact exact-active-class="active">Subject</b-nav-item>
              </b-navbar-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-form>
                  <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown text="Lang" right>
                  <b-dropdown-item href="#">EN</b-dropdown-item>
                  <b-dropdown-item href="#">ES</b-dropdown-item>
                  <b-dropdown-item href="#">RU</b-dropdown-item>
                  <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

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
        <h1>Mathematics Topics</h1>
        <div class="input-group">
            <!-- <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
            </div> -->
            <p>Start exploring Math resources and questions by topic</p>
        </div>

        <b-list-group>
          <b-list-group-item to="/math/angles">Angles</b-list-group-item>
          <b-list-group-item to="/math/elevation-and-depression" variant="primary">Angles of Elevation and Depression</b-list-group-item>
          <b-list-group-item to="/math/bearings-and-distances" variant="secondary">Bearings and Distances</b-list-group-item>
          <b-list-group-item to="/math/binary-operations" variant="success">Binary Operation</b-list-group-item>
          <b-list-group-item to="/math/calculus" variant="danger">Calculus</b-list-group-item>
          <b-list-group-item to="/math/change-of-subject-of-formula" variant="warning">Change of Subject of Formula</b-list-group-item>
          <b-list-group-item to="/math/circle-geometry" variant="info">Circle Geometry</b-list-group-item>
          <b-list-group-item to="/math/coordinategeo" variant="light">Coordinate Geometry</b-list-group-item>
          <b-list-group-item to="/math/factorisation" variant="dark">Factorisation</b-list-group-item>
          <b-list-group-item to="/math/inequalities">Inequalities</b-list-group-item>
          <b-list-group-item to="/math/indices" variant="primary">Indices</b-list-group-item>
          <b-list-group-item to="/math/limits" variant="secondary">Limits</b-list-group-item>
          <b-list-group-item to="/math/loci" variant="success">Loci</b-list-group-item>
          <b-list-group-item to="/math/logarithms" variant="danger">Logarithm</b-list-group-item>
          <b-list-group-item to="/math/matrices" variant="warning">Matrices and Determinants</b-list-group-item>
          <b-list-group-item to="/math/maxmin" variant="info">Maxima and Minima</b-list-group-item>
          <b-list-group-item to="/math/mensuration-of-plane-shapes" variant="light">Mensuration of Plane Shapes</b-list-group-item>
          <b-list-group-item to="/math/mensuration-of-solid-shapes" variant="dark">Mensuration of Solid Shapes</b-list-group-item>
          <b-list-group-item to="/math/number-systems">Number Bases</b-list-group-item>
          <b-list-group-item to="/math/permutation-and-combination" variant="primary">Permutation and Combination</b-list-group-item>
          <b-list-group-item to="/math/plane-geometry" variant="secondary">Plane Geometry</b-list-group-item>
          <b-list-group-item to="/math/polynomials" variant="success">Polynomials</b-list-group-item>
          <b-list-group-item to="/math/probability" variant="danger">Probability</b-list-group-item>
          <b-list-group-item to="/math/quadratic-equations" variant="warning">Quadratic Equations</b-list-group-item>
          <b-list-group-item to="/math/progression" variant="info">Progression</b-list-group-item>
          <b-list-group-item to="/math/sets" variant="light">Sets</b-list-group-item>
          <b-list-group-item to="/math/simultaneous-equations" variant="dark">Simultaneous Equations</b-list-group-item>
          <b-list-group-item to="/math/statistics">Statistics</b-list-group-item>
          <b-list-group-item to="/math/surds" variant="primary">Surds</b-list-group-item>
          <b-list-group-item to="/math/trigonometry" variant="secondary">Trigonometry</b-list-group-item>
          <b-list-group-item to="/math/variation" variant="success">Variation</b-list-group-item>
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