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


## License

Licensed under [MIT][]. Copyright (c) 2018 [l10178][]

[grapes]: https://github.com/l10178/grapes
[MIT]: https://opensource.org/licenses/MIT
[l10178]: http://nxest.com/
[Jodd]: https://jodd.org/
