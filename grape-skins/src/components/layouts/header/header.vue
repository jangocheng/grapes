<template>
    <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">Grapes</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-item-dropdown right>
                    <template slot="button-content">
                        <i class="fa fa-github fa-2x"></i>
                    </template>
                    <b-dropdown-item href="https://github.com/l10178/grapes" target="_blank">grapes</b-dropdown-item>
                    <b-dropdown-item href="https://github.com/l10178/bits-pieces" target="_blank">bits-pieces
                    </b-dropdown-item>
                    <b-dropdown-item href="https://github.com/l10178/angular-pretty-size"
                                     target="_blank">angular-pretty-size
                    </b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">English</b-dropdown-item>
                    <b-dropdown-item href="#">Chinese</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                    <template slot="button-content">
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Signout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: 'GrpHeader',
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>


</style>
