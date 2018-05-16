<template>
    <el-menu class="navbar" mode="horizontal">
        <a href="https://github.com/l10178/grapes"
           class="dropdown-toggle navlink"
           target="_blank" role="button">
            <i class="fa fa-github fa-2x"></i>
        </a>
    </el-menu>
</template>

<script>
    export default {
        name: 'GrpHeader',
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

    .navbar{
        text-align: right;
    }

</style>
