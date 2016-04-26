"use strict";

const
  nconf = require('nconf'),
  npmPackage = require('../../package.json'),
  express = require('express');

function createRoot(router) {
  router.get('/', (req, res) => {
    res.json({
      version: npmPackage.version,
      commit: nconf.get('GIT_COMMIT'),
      node: nconf.get('DISCOVER_NODE_NAME')
    });
  });
  return router;
}

module.exports = {
  createRouter: () => {
    return createRoot(express.Router());
  }
};