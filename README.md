# Grapes [![Build Status](https://travis-ci.org/l10178/grapes.svg?branch=master)](https://travis-ci.org/l10178/grapes)
Grapes is a Spring Boot + Vue.js Web application.
`grape-skins` is the source  of frontend, and `grape-seeds` is the source of backend.

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.
2. [Yarn][]: We use Yarn to manage Node dependencies.
   Depending on your system, you can install Yarn either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

    yarn install

We use yarn scripts and [Webpack][] as our build system.


Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    ./mvnw
    yarn start

[Yarn][] is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `yarn update` and `yarn install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `yarn help update`.

The `yarn run` command will list all of the scripts available to run for this project.

## Setting up your environment

### Configuring Node and Yarn
 * In China, set yarn registry to https://registry.npm.taobao.org
 
   > yarn config set registry https://registry.npm.taobao.org
   
 * Download node-sass from taobao mirrors
   
   > yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
   
 * Download chromedriver from taobao mirrors
    
   >  yarn config set chromedriver_cdnurl https://npm.taobao.org/mirrors/chromedriver
    
 * Install phantomjs
 
   > yarn config set phantomjs_cdnurl http://npm.taobao.org/mirrors/phantomjs
   
   

### Configuring Intellij IDEA
* Set JavaScript language version to ECMAScript 6( settings>Lauguages & Frameworks>JavaScript ).
* Use google JavaScript code style.  See `.eslintrc.js`.


## Building for production

To optimize the grapes application for production, run:

    ./mvnw -Pprod clean package
    
 or skip test
 
    ./mvnw -Pprod clean package -Dmaven.test.skip=true

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.war

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

## swagger-ui

Active maven `swagger` profile and then navigate to [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html) in your browser 

## Testing

To launch your application's tests, run:

    ./mvnw clean test

### Client tests

Unit tests can be run with:

    yarn test



## Using Docker to simplify development (optional)
 


## License

Licensed under [MIT][]. Copyright (c) 2018 [l10178][]

[MIT]: https://opensource.org/licenses/MIT
[l10178]: http://nxest.com/
[Node.js]: https://nodejs.org/
[Yarn]: https://yarnpkg.org/
[Webpack]: https://webpack.github.io/
