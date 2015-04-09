# totem-demo [![Build Status](https://travis-ci.org/totem/totem-demo.svg)](https://travis-ci.org/totem/totem-demo) [![Coverage Status](https://coveralls.io/repos/totem/totem-demo/badge.svg)](https://coveralls.io/r/totem/totem-demo)
Totem demo

# Demo Steps

* The lasted deployed version can be accessed using:  
[https://totem-demo.elb.us-west-1.cu.melt.sh](https://totem-demo.elb.us-west-1.cu.melt.sh)
* Login to github and [fork](https://github.com/totem/totem-demo/fork) this repository.
* Modify file [demo/views.py#Line 10](demo/views.py#L10) and fix the typo for "Worlb!" to "World!"
* Modify file [Dockerfile#Line 1](Dockerfile#L1) and change python image from 2.7-trusty to 3.4-trusty
* Create a [pull request](https://github.com/totem/totem-demo/compare) to merge these changes.

# Sample Config
```
enabled: true

variables:
  enable_travis: true
  enable_public_host: true
  node_count: 2
  min_nodes: 1
```
