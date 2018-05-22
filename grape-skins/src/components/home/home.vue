<template>
    <div>
        <header class="home-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="logo-big">
                            <img class="img-responsive" src="../../assets/images/logo/logo.png" alt="">
                        </div>
                        <div class="intro-text">
                            <span class="brand">Greetings, I like Grapes!</span>
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

        <section id="about" class="home-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="heading">What is Grapes?</h2>
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
                            <img src="../../assets/images/third/logo-vue.png" class="project-icon img-responsive">
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
                            Our goal is to generate for you a complete and modern Web app or microservice architecture,
                            unifying:
                        </p>
                    </div>
                    <div class="col-md-6">
                        <h2 class="heading">Sample &amp; Sources</h2>
                        <p>
                            You can checkout a sample application
                            <a href="https://github.com/l10178/grapes" target="_blank">here</a>.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="heading">Grapes news and events</h2>
                        <hr class="star-primary">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        No news is good news.
                    </div>
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
                padding: 1.2em 0em 0.4em 0em;
                margin-bottom: 25px;
                .description {
                    padding-left: 0.4em;
                    font-size: 0.8em;
                    opacity: 0.8;
                }
            }
        }
        .card-body.half-padding {
            padding: 12.5px;
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
                .description {
                }
            }
            .pull-right {
                padding: 0.5em 1em;
            }
        }
        .card-header:after {
            content: '';
            display: block;
            clear: both;
        }
        .card-profile-img {
            img {
                width: 100%;
                height: auto;
            }
        }
        .card-jumbotron {
            padding: 1.5em 1.5em;
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

    $primary-color: #3E8ACC;
    $color-clear-blue: #91d5fb;
    $color-blue: #3E8ACC;
    $dark-blue: #09486b;
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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        text-transform: capitalize;
        font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 700;
    }

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
                font-size: 5em;
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
        .brand {
            margin-bottom: 15px;
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

    .stack-container {
        margin-bottom: 50px;
    }

    .stacks {
        margin: 0 auto;
        list-style: none;
        padding: 0px 100px 0 100px;
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
            .title_sub_tech {
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
                .title_sub_tech {
                    color: white;
                }
            }

        }
    }

</style>
