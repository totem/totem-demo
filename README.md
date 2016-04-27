# totem-demo [![Build Status](https://travis-ci.org/totem/totem-demo.svg?branch=example_dropwizard)](https://travis-ci.org/totem/totem-demo) [![Coverage Status](https://coveralls.io/repos/totem/totem-demo/badge.svg?branch=example_dropwizard)](https://coveralls.io/r/totem/totem-demo?branch=example_dropwizard)
Totem example using java dropwizard.

## Building
```
docker build --rm -t totem/totem-demo:example_dropwizard .
```

## Running
```
docker run -it -p 8080:8080 totem/totem-demo:example_dropwizard
```
