# scholastic-demo [![Build Status](https://travis-ci.org/totem/scholastic-demo.svg)](https://travis-ci.org/totem/scholastic-demo) [![Coverage Status](https://coveralls.io/repos/totem/scholastic-demo/badge.svg)](https://coveralls.io/r/totem/scholastic-demo)
Totem demonstration for Scholastic

# Demo Steps

* The lasted deployed version can be accessed using:
[http://scholastic-demo.elb.us-west-1.th.melt.sh](http://scholastic-demo.elb.us-west-1.th.melt.sh)

* Login to github and [fork](https://github.com/totem/scholastic-demo/fork) this repository.
* Modify file [scholastic/views.py#Line 10](scholastic/views.py#L10) and fix the type for "worlb!" to "world!"
* Modify file [Dockerfile#Line 1](Dockerfile#L1) and change python image from 2.7-trusty to 3.4-trusty
* Create a [pull request](https://github.com/totem/scholastic-demo/compare) to merge these changes.
