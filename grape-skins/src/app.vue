<template>
    <div id="app">
        <el-container>
            <el-header>
                <grp-header></grp-header>
            </el-header>
            <el-container>
                <el-aside class="side-menu sidebar-inverse"></el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>

</template>

<script>
    import GrpHeader from './components/layouts/header/header';

    export default {
        name: 'app',
        components: {GrpHeader},
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "./assets/styles/variables";

    .el-aside.side-menu {
        z-index: 100000;
        position: fixed;
        width: $app-aside-width !important;
        height: 100%;
        transition: all 0.25s;
        &.sidebar-inverse {
            background-color: $brand-black;
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08);
        }
    }

    .el-header {
        padding: 0;
        //height: $app-header-height!important;
    }

    .el-main {
        //background-color: $body-bg;
    }

    .el-footer {
        background-color: $brand-black;
    }
</style>
