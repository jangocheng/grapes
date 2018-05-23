<template>
    <div>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="logo-big">
                            <img class="img-responsive" src="../../assets/images/logo/logo.png" alt="">
                        </div>
                        <div class="intro-text">
                            <span class="brand">Greetings, Grapes!</span>
                            <hr class="star-light">
                            <div class="row stats">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <a href="https://github.com/l10178/grapes" target="_blank">
                                        <div class="card dark summary-inline">
                                            <div class="card-body">
                                                <i class="icon fa fa-download fa-3x"></i>
                                                <div class="content">
                                                    <div class="title">{{npmDownloads}}</div>
                                                    <div class="sub-title">Downloads in last 30 days</div>
                                                </div>
                                                <div class="clear-both"></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <a href="https://github.com/l10178/grapes" target="_blank">
                                        <div class="card dark summary-inline">
                                            <div class="card-body">
                                                <i class="icon fa fa-github fa-3x"></i>
                                                <div class="content">
                                                    <div class="title">{{stars}}</div>
                                                    <div class="sub-title">Stars</div>
                                                </div>
                                                <div class="clear-both"></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <a href="https://github.com/l10178/grapes/contributors" target="_blank">
                                        <div class="card dark summary-inline">
                                            <div class="card-body">
                                                <i class="icon fa fa-users fa-3x"></i>
                                                <div class="content">
                                                    <div class="title">{{contributors}}</div>
                                                    <div class="sub-title">Contributors</div>
                                                </div>
                                                <div class="clear-both"></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="heading">What is Grapes</h2>
                        <hr class="star-primary">
                    </div>
                </div>
                <div class="row text-center">
                <span class="title text-center">
                    <div class="head-icons">
                        <a href="http://projects.spring.io/spring-boot/" target="_blank">
                            <img src="../../assets/images/third/logo-spring-boot.png"
                                 class="project-icon img-responsive">
                        </a>
                        <i class="fa fa-4x">+</i>
                        <a href="https://cn.vuejs.org/" target="_blank">
                            <img src="../../assets/images/third/vuejs.png" class="project-icon img-responsive">
                        </a>
                        <i class="fa fa-4x">=</i>
                        <a href="/">
                            <img src="../../assets/images/logo/logo.png" class="project-icon img-responsive">
                        </a>
                    </div>
                    <p class="lead">
                        Grapes is a
                        <a class="dark" href="http://projects.spring.io/spring-boot/" target="_blank">Spring Boot</a> +
                        <a class="dark" href="https://cn.vuejs.org/" target="_blank">Vue.js</a> Web application.
                        <br>
                    </p>
                </span>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="heading">Goal</h2>
                        <p>
                            Our goal is to generate for you a complete and modern Web app or micro service architecture,
                            unifying:
                        </p>
                        <ul>
                            <li>A high-performance and robust Java stack on the server side with Spring Boot</li>
                            <li>A sleek, modern, mobile-first front-end with Vue.js and Bootstrap</li>
                            <li>A powerful workflow to build your application with Webpack and Maven</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h2 class="heading">Sample &amp; Sources</h2>
                        <p>
                            You can checkout a sample application
                            <a href="https://github.com/l10178/grapes" target="_blank">here</a>.
                        </p>
                        <ul>
                            <li> If you want to code with us, feel free to join!</li>
                            <li> If you like the project, please give us a star on GitHub</li>
                            <li> I think you will like
                                <a href="https://www.jhipster.tech/" target="_blank">JHipster</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="heading">Grapes Quick Start</h2>
                        <hr class="star-primary">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <ol class="text-body">
                            <li>Checkout grapes <code>git clone https://github.com/l10178/grapes.git</code></li>
                            <li>Run backend by the java main method <code>com.nxest.grapes.GrapesApp.main</code></li>
                            <li>Run frontend by yarn
                                <code>cd grape-skins &amp;&amp; yarn &amp;&amp; yarn start</code>
                            </li>
                            <li>Navigate to <a href="http://localhost:9000">http://localhost:9000</a> in your browser
                            </li>
                        </ol>
                    </div>
                    <div class="col-lg-12">
                        <p>
                            <small>
                                * Assuming you have already installed
                                <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html"
                                   target="_blank">Java</a>,
                                <a href="https://git-scm.com/" target="_blank">Git</a>,
                                <a href="https://nodejs.org/" target="_blank">Node.js</a>,and
                                <a href="https://yarnpkg.com/en/docs/install" target="_blank">Yarn</a>.
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!--technology stack-->
        <section id="technology-stack" class="stack-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="heading">Client Side Stack</h2>
                        <hr class="star-light">
                    </div>
                </div>
                <div class="row stack-container">
                    <ul class="text-center stacks">
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/html-5.svg"/>
                            <span class="title-sub-tech">HTML5</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/css-3.svg"/>
                            <span class="title-sub-tech">CSS3</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/bootstrap.svg"/>
                            <span class="title-sub-tech">Bootstrap</span>
                        </li>

                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/vuejs.png"/>
                            <span class="title-sub-tech">Vue.js</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/jquery.svg" class="width invert-hover"/>
                            <span class="title-sub-tech">JQuery</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/websocket.png" class="invert"/>
                            <span class="title-sub-tech">Websockets</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/yarn.svg"/>
                            <span class="title-sub-tech">Yarn</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/webpack.svg"/>
                            <span class="title-sub-tech">Webpack</span>
                        </li>

                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/sass.svg" class="height"/>
                            <span class="title-sub-tech">Sass</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/browsersync.svg"/>
                            <span class="title-sub-tech">Browsersync</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/karma.svg"/>
                            <span class="title-sub-tech">Karma</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/protarctor.png"/>
                            <span class="title-sub-tech">Protractor</span>
                        </li>

                        <li class="clear"></li>
                    </ul>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="heading">Server Side Stack</h2>
                        <hr class="star-light">
                    </div>
                </div>
                <div class="row stack-container">
                    <ul class="text-center stacks">
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/spring-boot.png"/>
                            <span class="title-sub-tech">Spring Boot</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/spring.png"/>
                            <span class="title-sub-tech">Spring Security</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/netflix.png"/>
                            <span class="title-sub-tech">Netflix OSS</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/consul.svg"/>
                            <span class="title-sub-tech">Consul</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/gradle-new.png" class="invert-hover-white"/>
                            <span class="title-sub-tech">Gradle</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/maven.png" class="invert-hover-white width"/>
                            <span class="title-sub-tech">Maven</span>
                        </li>
                        <li class="clip img-circle">
                            <img src="../../assets/images/third/hibernate.svg"/>
                            <span class="title-sub-tech">Hibernate</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/liquibase.gif" class="width"/>
                            <span class="title-sub-tech">Liquibase</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/mysql.svg"/>
                            <span class="title-sub-tech">MySQL</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/mariadb.svg"/>
                            <span class="title-sub-tech">MariaDB</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/postgresql.svg" class="height"/>
                            <span class="title-sub-tech">PostgreSQL</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/oracle.svg" class="width"/>
                            <span class="title-sub-tech">Oracle</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/mssql.png"/>
                            <span class="title-sub-tech">MS SQL</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/mongo.png"/>
                            <span class="title-sub-tech">MongoDB</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/cassandra.svg" class="invert-hover-white"/>
                            <span class="title-sub-tech">Cassandra</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/ehcache.png"/>
                            <span class="title-sub-tech">EhCache</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/Hazelcast.png" class="invert-hover-white"/>
                            <span class="title-sub-tech">Hazelcast</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/infinispan.png"/>
                            <span class="title-sub-tech">Infinispan</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/elasticsearch.svg"/>
                            <span class="title-sub-tech">ElasticSearch</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/kafka.svg" class="invert-hover-white"/>
                            <span class="title-sub-tech">Kafka</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/swagger.png"/>
                            <span class="title-sub-tech">Swagger</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/elk-stack.png" class="invert-hover-white"/>
                            <span class="title-sub-tech">ELK Stack</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/prometheus.svg"/>
                            <span class="title-sub-tech">Prometheus</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/thymeleaf.png"/>
                            <span class="title-sub-tech">Thymeleaf</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/gatling.png"/>
                            <span class="title-sub-tech">Gatling</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/cucumber.svg"/>
                            <span class="title-sub-tech">Cucumber</span>
                        </li>
                        <li class="clear"></li>
                    </ul>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="heading">Deployment</h2>
                        <hr class="star-light">
                    </div>
                </div>
                <div class="row stack-container">
                    <ul class="text-center stacks">
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/docker.svg"/>
                            <span class="title-sub-tech">Docker</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/kubernets.svg"/>
                            <span class="title-sub-tech">Kubernetes</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/heroku.svg"/>
                            <span class="title-sub-tech">Heroku</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/cf.png" class="invert-hover-white"/>
                            <span class="title-sub-tech">CloudFoundry</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/aws.svg" class="width"/>
                            <span class="title-sub-tech">AWS</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/boxfuse.svg"/>
                            <span class="title-sub-tech">Boxfuse</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/rancher.svg" class="width"/>
                            <span class="title-sub-tech">Rancher</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/openshift.svg"/>
                            <span class="title-sub-tech">OpenShift</span>
                        </li>
                        <li class="clear"></li>
                    </ul>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="heading">CI/CD</h2>
                        <hr class="star-light">
                    </div>
                </div>
                <div class="row stack-container">
                    <ul class="text-center stacks">
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/jenkins.svg"/>
                            <span class="title-sub-tech">Jenkins</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/travis.svg"/>
                            <span class="title-sub-tech">Travis CI</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/gitlab.svg"/>
                            <span class="title-sub-tech">Gitlab CI</span>
                        </li>
                        <li class="clip img-circle new">
                            <img src="../../assets/images/third/circleci.svg"/>
                            <span class="title-sub-tech">Circle CI</span>
                        </li>
                        <li class="clear"></li>
                    </ul>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        name: 'GrpHome',
        data() {
            return {
                npmDownloads: 10178,
                stars: 987,
                contributors: 3,
            };
        },
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

    $primary-color: #3E8ACC;
    $color-clear-blue: #91d5fb;
    $color-blue: #3E8ACC;
    $dark-blue: #09486b;

    /* Card */
    .card {
        background-color: #FFF;
        border-radius: 1px;
        overflow: hidden;
        position: relative;
        .card-body {
            padding: 25px;
            .sub-title {
                font-size: 1.2em;
                padding: 1.2em 0 0.4em 0;
                margin-bottom: 25px;
            }
        }
        .card-header {
            .card-title {
                padding: 1.2em 25px;
                float: left;
                .title {
                    font-family: 'Roboto Condensed', sans-serif;
                    font-size: 1.5em;
                    text-decoration: none;
                }
            }
        }
        .card-header:after {
            content: '';
            display: block;
            clear: both;
        }

        &.dark {
            background-color: #09486b;
            color: #FFF;
        }
    }

    .card:hover {
        .card-header {
            .title {
                text-decoration: none !important;
            }
        }
    }

    .card.summary-inline {
        .card-body {
            padding: 20px;
            .icon {
            }
            .content {
                float: right;
                .title {
                    font-family: 'Lato', sans-serif;
                    margin-top: -0.3em;
                    font-size: 3.5em;
                    text-align: right;
                }
                .sub-title {
                    font-family: 'Lato', sans-serif;
                    font-size: 0.9em;
                    text-align: right;
                    margin-top: -10px;
                    margin-bottom: 0;
                    padding: 0;
                    border-bottom: 0;
                }
            }
        }
    }

    .card.profile {
        .card-body {
            padding: 0.5em 0.8em;
        }
        .card-footer {
            padding: 0.5em 0.8em;
        }
    }

    body {
        overflow-x: hidden;
    }

    p {
        font-size: 20px;
        &.small {
            font-size: 16px;
        }
    }

    a {
        outline: 0;
        color: $primary-color;
        &:hover,
        &:focus,
        &:active,
        &.active {
            outline: 0;
            color: $primary-color;
        }
    }

    /*h1,*/
    /*h2,*/
    /*h3,*/
    /*h4,*/
    /*h5,*/
    /*h6 {*/
        /*text-transform: capitalize;*/
        /*font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;*/
        /*font-weight: 700;*/
    /*}*/

    hr {
        &.star-light,
        &.star-primary {
            margin: 30px auto 30px;
            padding: 0;
            max-width: 250px;
            border: 0;
            border-top: solid 5px;
            text-align: center;
        }
        &.star-light:after,
        &.star-primary:after {
            content: "\f005";
            display: inline-block;
            position: relative;
            top: -.8em;
            padding: 0 .25em;
            font-family: FontAwesome;
            font-size: 2em;
        }
        &.star-light {
            border-color: #fff;
            &:after {
                color: #fff;
                background-color: $primary-color;
            }
        }
        &.star-primary {
            border-color: #2c3e50;
            &:after {
                color: #2c3e50;
                background-color: #F9F9F9;
            }
        }
    }

    .img-centered {
        margin: 0 auto;
    }

    header {
        text-align: center;
        color: #fff;
        background: $primary-color;
        .card {
            .card-body {
                text-align: left;
            }
            &.summary-inline {
                .card-body {
                    padding: 10px;
                    .content {
                        .title {
                            font-size: 2em;
                        }
                    }
                }
            }
        }
        .container {
            padding-top: 100px;
            padding-bottom: 50px;
            .logo-big {
                outline: white;
                max-width: 360px;
                width: 100%;
                background: #fff;
                border-radius: 100%;
                max-height: 360px;
                height: 100%;
                padding: 15px;
                margin: 0 auto;
            }
            .brand {
                margin-bottom: 15px;
                font-size: 5em;
                font-family: 'Pacifico', cursive;
                text-transform: capitalize;
            }
            .stats {
                margin-top: 80px;
            }
        }
        img {
            display: block;
            margin: 0 auto 20px;
            max-width: 100%;
            height: auto;
        }
        .intro-text {
            .name {
                display: block;
                text-transform: uppercase;
                font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
                font-size: 2em;
                font-weight: 700;
            }
            .skills {
                font-size: 1.25em;
                font-weight: 300;
            }
        }
    }

    @media (min-width: 768px) {
        header {
            .container {
                padding-top: 100px;
                padding-bottom: 50px;
            }
            .intro-text {
                .name {
                    font-size: 4.75em;
                }
                .skills {
                    font-size: 1.75em;
                }
            }
        }
    }

    section {
        padding: 100px 0;
        h2 {
            margin: 0;
            font-size: 3em;
        }
        &.news {
            padding: 10px 0;
        }
        &.success {
            color: #fff;
            background: $primary-color;
            a {
                outline: 0;
                color: #2c3e50;
                &:hover,
                &:focus,
                &:active,
                &.active {
                    outline: 0;
                    color: #2c3e50;
                }
            }
        }
        .title {
            padding: 15px;
            width: 100%;
            .head-icons {
                margin: 0 0 20px;
                a {
                    display: inline-block;
                    vertical-align: top;
                }
                & img {
                    height: 80px;
                    width: 80px;
                }
            }
        }
        ul {
            font-size: 1.2em;
        }
        .card {
            margin-bottom: 5px;
            .card-body {
                text-align: left;
            }
            &.module.summary-inline {
                .card-body {
                    padding: 10px;
                    .content {
                        width: 75%;
                        .title {
                            font-size: 1.5em;
                        }
                        .sub-title {
                            margin: 10px 0;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 767px) {
        section {
            padding: 75px 0;
            &.first {
                padding-top: 75px;
            }
        }
    }

    .stacks {
        margin: 0 auto;
        list-style: none;
        padding: 0 50px;
        max-width: 1200px;
        .clip {
            margin: 5px;
            width: 150px;
            height: 150px;
            background-color: white;
            border: 1px solid white;
            color: $dark-blue;
            float: left;
            text-align: center;
            &.img-circle {
                -webkit-border-radius: 500px;
                -moz-border-radius: 500px;
                border-radius: 500px;
            }
            i {
                display: block;
                padding-top: 25px;
                font-size: 4.8em;
            }
            img {
                padding-top: 25px;
                display: block;
                margin: 0 auto;
                height: 100px;
                &.height {
                    height: 100px;
                    width: auto;
                }
                &.width {
                    height: auto;
                    width: 100px;
                    margin: 28px auto;
                }
                &.white {
                    -webkit-filter: grayscale(100%) brightness(1.5);
                    filter: grayscale(100%) brightness(1.5);
                }
                &.white-inv {
                    -webkit-filter: grayscale(100%) brightness(1.5) invert(100%);
                    filter: grayscale(100%) brightness(1.5) invert(100%);
                }
                &.invert {
                    -webkit-filter: invert(100%);
                    filter: invert(100%);
                }
                &.saturate {
                    -webkit-filter: saturate(3);
                    filter: saturate(3);
                }
                &.grayscale {
                    -webkit-filter: grayscale(100%);
                    filter: grayscale(100%);
                }
                &.brightness {
                    -webkit-filter: brightness(0.25);
                    filter: brightness(0.25);
                }
                &.contrast {
                    -webkit-filter: contrast(160%);
                    filter: contrast(160%);
                }
            }
            .title-sub-tech {
                margin-top: 5px;
                font-size: 13px;
                color: $dark-blue;
                display: block;
                text-align: center;
            }
            &:hover {
                background-color: $dark-blue;
                border: 1px solid $dark-blue;
                color: white;
                img {
                    -webkit-filter: grayscale(100%) brightness(1.5);
                    filter: grayscale(100%) brightness(1.5);
                    &.invert-hover {
                        -webkit-filter: invert(100%);
                        filter: invert(100%);
                    }
                    &.invert-hover-white {
                        -webkit-filter: grayscale(100%) brightness(1.5) invert(100%);
                        filter: grayscale(100%) brightness(1.5) invert(100%);
                    }
                }
                .title-sub-tech {
                    color: white;
                }
            }

        }
    }

    .text-body {
        font-size: 1.2em;
    }

    .stack-section {
        color: #fff;
        background: $primary-color;
    }

    .stack-container {
        margin: 0 0 50px 0;
    }

</style>
