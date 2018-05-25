<template>
    <div class="container blog">
        <h1>
            <fa-icon icon="list-ul"></fa-icon>
            Bits And Pieces
        </h1>
        <p>
            I always have a lot of bits and pieces in my coat pocket.
        </p>
        <ul>
            <li v-for="content in contents">
                <p>
                    <router-link to="/blog">
                        {{ content.name }}
                    </router-link>
                    <!--<a :href="content.download_url" target="_blank">-->
                    <!--<fa-icon icon="arrow-alt-circle-down" size="sm"/>-->
                    <!--</a>-->
                    <!--show detail here-->
                    <!--<vue-markdown :source="source"></vue-markdown>-->
                </p>

            </li>
        </ul>
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
                contents: [],
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
            repo.getContents('master', '', true).then((response) => {
                this.contents = response.data;
            });
            let me = gh.getUser(GITHUB_USER);

            me.listRepos(function(err, notifications) {
                // alert(notifications[0].name);
            });
        },
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .blog {
        ul {
            font-size: 16px;
            li {
            }
        }

    }
</style>
