<template>
    <div>
          <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">ExamResource</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item to="/" exact exact-active-class="active">All Subjects</b-nav-item>
                <b-nav-item-dropdown text="Select a Subject" right>
                  <b-dropdown-item to="/chemistry" exact exact-active-class="active">Chemistry</b-dropdown-item>
                  <b-dropdown-item to="/english" exact exact-active-class="active">English</b-dropdown-item>
                  <b-dropdown-item to="/math" exact exact-active-class="active">Math</b-dropdown-item>
                  <b-dropdown-item to="/physics" exact exact-active-class="active">Physics</b-dropdown-item>
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
</template>

<script>
export default {
    name: 'SubNav'
}
</script>

<style lang="scss" scoped>

</style>