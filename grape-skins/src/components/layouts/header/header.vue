<template>
    <div>
        <div class="navbar">
            <div class="navbar-brand">
                <a href="/">
                    <img src="../../../assets/images/logo/logo.png" class="img-brand"/>
                </a>
                Grapes
            </div>
            <el-menu
                default-active="-100"
                mode="horizontal"
                background-color="#1c2b36"
                text-color="#c6cfd6"
                active-text-color="#fff">

                <el-menu-item index="-1">
                    <router-link to="/home">
                        <fa-icon :icon="['fas','home']" size="lg"/>
                        Home
                    </router-link>
                </el-menu-item>
                <el-menu-item index="1">
                    <router-link to="/blog">
                        <fa-icon :icon="['fas','rss']" size="lg"/>
                        Blog
                    </router-link>
                </el-menu-item>
                <el-submenu index="0">
                    <template slot="title">
                        <fa-icon icon="user-plus" size="lg"/>
                        Administration
                    </template>
                    <el-menu-item index="">
                        Health
                    </el-menu-item>
                </el-submenu>

                <el-submenu index="3">
                    <template slot="title">
                        <fa-icon icon="user-circle" size="lg"/>
                        Account
                    </template>
                    <el-menu-item index="3-1">
                        <el-button type="text" @click="loginFormVisible = true">Sign In</el-button>
                    </el-menu-item>
                    <el-menu-item index="3-2">
                        <el-button type="text">Sign Out</el-button>
                    </el-menu-item>
                    <el-menu-item index="3-3">
                        <el-button type="text">Profile</el-button>
                    </el-menu-item>
                    <el-menu-item index="3-4">
                        <el-button type="text">Register</el-button>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <fa-icon :icon="['fab','github']" size="2x"/>
                    </template>
                    <el-menu-item index="2-1">
                        <a href="https://github.com/l10178/grapes" target="_blank">grapes</a>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                        <a href="https://github.com/l10178/bits-pieces" target="_blank">bits-pieces</a>
                    </el-menu-item>
                    <el-menu-item index="2-3">
                        <a href="https://github.com/l10178/angular-pretty-size" target="_blank">angular-pretty-size</a>
                    </el-menu-item>
                </el-submenu>


            </el-menu>
        </div>


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
    .navbar {
        color: #fff;
        padding: 0 16px;
    }

    .navbar-brand {
        font-size: 1.6em;
        font-family: 'Pacifico', cursive;
        img {
            width: 48px;
            height: 48px;
        }
    }

    .el-menu {
        border: 0;
    }
</style>
