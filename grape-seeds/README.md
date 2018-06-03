# grapes-seeds
This is the source of [grapes][] backend.


## Development


## Building for production

To optimize the grapes application for production, run:

    ./mvnw -Pprod clean package
    
 or skip test
 
    ./mvnw -Pprod clean package -Dmaven.test.skip=true

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.war

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

## Testing

To launch your application's tests, run:

    ./mvnw clean test

## Run spotbugs
To generate spotbugs reports, run maven site command after compile:

    ./mvnw clean compile site


## Using Docker to simplify development (optional)

You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the [src/main/docker](src/main/docker) folder to launch required third party services.

For example, to start a mysql database in a docker container, run:

    docker-compose -f src/main/docker/mysql.yml up -d

To stop it and remove the container, run:

    docker-compose -f src/main/docker/mysql.yml down

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

    ./mvnw verify -Pprod dockerfile:build

Then run:

    docker-compose -f src/main/docker/app.yml up -d


## License

Licensed under [MIT][]. Copyright (c) 2018 [l10178][]

[grapes]: https://github.com/l10178/grapes
[MIT]: https://opensource.org/licenses/MIT
[l10178]: http://nxest.com/
[Node.js]: https://nodejs.org/
[Yarn]: https://yarnpkg.org/
[Webpack]: https://webpack.github.io/
