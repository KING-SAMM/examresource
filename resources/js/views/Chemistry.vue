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

        <h1>Chemistry</h1>
        <div class="input-group">
            <!-- <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
            </div> -->
            <p>Start exploring Chemistry resources and questions by topic</p>
        </div>
        <b-list-group>
            <b-list-group-item href="#">Default list group item</b-list-group-item>
            <b-list-group-item href="#" variant="primary">Primary list group item</b-list-group-item>
            <b-list-group-item href="#" variant="secondary">Secondary list group item</b-list-group-item>
            <b-list-group-item href="#" variant="success">Success list group item</b-list-group-item>
            <b-list-group-item href="#" variant="danger">Danger list group item</b-list-group-item>
            <b-list-group-item href="#" variant="warning">Warning list group item</b-list-group-item>
            <b-list-group-item href="#" variant="info">Info list group item</b-list-group-item>
            <b-list-group-item href="#" variant="light">Light list group item</b-list-group-item>
            <b-list-group-item href="#" variant="dark">Dark list group item</b-list-group-item>
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
