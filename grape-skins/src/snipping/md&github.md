
            <vue-markdown :source="source"></vue-markdown>
    import VueMarkdown from 'vue-markdown';
    import GitHub from 'github-api';
    source: '',
    
    components: {
                VueMarkdown,
            },
            
              mounted() {
                        let gh = new GitHub({
                            token: '2102e007c582cb4d6256812015468b646745c32d',
                        });
                        let repo = gh.getRepo('l10178', 'bits-pieces');
                        repo.getContents('master', 'README.md', true).then((response) => {
                            this.source = response.data;
                        });
                        let me = gh.getUser();
            
                        me.listRepos(function(err, notifications) {
                            // alert(notifications[0].name);
                        });
                    },