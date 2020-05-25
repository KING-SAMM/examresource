<template>
    <div>
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
                <b-dropdown-item to="government/topic1" exact exact-active-class="active">Topic1</b-dropdown-item>
                <b-dropdown-item to="government/topic2" exact exact-active-class="active">topic2</b-dropdown-item>
                <b-dropdown-item to="government/topic3" exact exact-active-class="active">topic3</b-dropdown-item>
                <b-dropdown-item to="government/topic4" exact exact-active-class="active">Topic4</b-dropdown-item>
                <b-dropdown-item to="government/topic5" exact exact-active-class="active">Topic5</b-dropdown-item>
                <b-dropdown-item to="government/topic6" exact exact-active-class="active">Topic6</b-dropdown-item>
                <b-dropdown-item to="government/topic7" exact exact-active-class="active">Topic7</b-dropdown-item>
                <b-dropdown-item to="government/topic8" exact exact-active-class="active">Topic8</b-dropdown-item>
                <b-dropdown-item to="government/topic9" exact exact-active-class="active">Topic9</b-dropdown-item>
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
        <h1>Topic 4</h1>
    </div>
</template>

