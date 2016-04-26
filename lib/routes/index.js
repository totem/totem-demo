"use strict";

const
  express = require('express'),
  bodyParser = require('body-parser'),
  nconf = require('nconf'),
  cors = require('cors'),
  _ = require('lodash');

function applyCors() {
  let corsOptions = {
    origin: (reqOrigin, callback) => {
      // TODO: Check for sites for which CORS needs to benabled
      callback(null, true);
    }
  };
  return cors(corsOptions);
}

const register = module.exports = {

  registerRoutes: (app, siteService) => {
    // Enable CORS pre-flight
    app.options('*', cors());
    // Apply CORS for configured sites
    app.use(applyCors());
    app.use(bodyParser.json({ type: 'application/json' }));
    app.use(bodyParser.json({ type: 'application/*+json' }));
    [
      ['/', './root'],
    ].forEach(route => {
      app.use(route[0], require(route[1]).createRouter());
    });
    return register;
  }
};