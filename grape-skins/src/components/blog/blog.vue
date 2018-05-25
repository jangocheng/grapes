<template>
    <div class="container">
        show blog here.
        <vue-markdown :source="source"></vue-markdown>
    </div>
</template>

<script>
    import VueMarkdown from 'vue-markdown';
    import GitHub from 'github-api';
    import {GITHUB_API_TOKEN, GITHUB_USER} from '../../constants';

    export default {
        name: 'GrpBlog',
        data() {
            return {
                stars: 987,
                source: '',
            };
        },
        components: {
            VueMarkdown,
        },
        mounted() {
            let gh = new GitHub({
                // it's a token, but should set to username
                username: GITHUB_API_TOKEN,
            });
            let repo = gh.getRepo(GITHUB_USER, 'bits-pieces');
            repo.getContents('master', 'README.md', true).then((response) => {
                this.source = response.data;
            });
            let me = gh.getUser(GITHUB_USER);

            me.listRepos(function(err, notifications) {
                // alert(notifications[0].name);
            });
        },
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
