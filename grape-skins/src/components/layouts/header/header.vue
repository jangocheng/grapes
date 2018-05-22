<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="dark">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">Grapes</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-item-dropdown right>
                        <template slot="button-content">
                            <i class="fa fa-github fa-2x"></i>
                        </template>
                        <b-dropdown-item href="https://github.com/l10178/grapes" target="_blank">grapes
                        </b-dropdown-item>
                        <b-dropdown-item href="https://github.com/l10178/bits-pieces" target="_blank">bits-pieces
                        </b-dropdown-item>
                        <b-dropdown-item href="https://github.com/l10178/angular-pretty-size"
                                         target="_blank">angular-pretty-size
                        </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <template slot="button-content">
                            <i class="fa fa-user-o fa-2x"></i>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Register</b-dropdown-item>

                        <b-dropdown-item href="#" @click="loginFormVisible = true">
                            <el-button type="text">Sign In</el-button>
                        </b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>


        <el-dialog title="Sign In" :visible.sync="loginFormVisible">
            <el-form :model="user">
                <el-form-item label="Username" :label-width="formLabelWidth">
                    <el-input type="text" v-model="user.username" auto-complete="off" required></el-input>
                </el-form-item>
                <el-form-item label="Password" :label-width="formLabelWidth">
                    <el-input type="password" v-model="user.password" auto-complete="off" required></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="loginFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="login()">Submit</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import Vue from 'vue';

    const loginUrl = '/api/authenticate';
    export default {
        name: 'GrpHeader',
        data() {
            return {
                loginFormVisible: false,
                user: {
                    username: '',
                    password: '',
                },
                formLabelWidth: '120px',
            };
        },
        methods: {
            login: function() {
                this.loginFormVisible = false;
                this.axios.post(loginUrl, this.user).then(function(response) {
                    const bearerToken = response.headers.authorization;
                    if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
                        const jwt = bearerToken.slice(7, bearerToken.length);
                        Vue.sessionStorage.set('authenticationToken', jwt);
                    }
                });
            },
        },
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>


</style>
