# totem-demo [![Build Status](https://travis-ci.org/totem/totem-demo.svg)](https://travis-ci.org/totem/totem-demo) [![Coverage Status](https://coveralls.io/repos/totem/totem-demo/badge.svg)](https://coveralls.io/r/totem/totem-demo)
Totem example using node express.

## Building
```
docker build --rm -t totem/totem-demo:example_nodejs .
```

## Running
```
docker run -it -p 8080:8080 totem/totem-demo:example_nodejs
```
