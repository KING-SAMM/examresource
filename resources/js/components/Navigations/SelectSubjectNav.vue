<template>
    <div>
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
    </div>
</template>

<script>
export default {
    name: 'selectSubjectNav'
}
</script>