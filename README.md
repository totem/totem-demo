# totem-demo 
This example shows how to configure a deploy which has no discovery.

# Config
See [totem.yml](totem.yml) for full config. The difference between regular deploy and this deploy is that:
- The deployment check is disabled (check path is empty)
- Discover check is disabled (check port is set to 0)
- Side kicks are disabled.
