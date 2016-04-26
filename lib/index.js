"use strict";

const
  nconf = require('nconf'),
  _ = require('lodash'),
  winston = require('winston');

const init = module.exports = {
  services: {},

  conf: (overrides) => {
    if (!init.services.nconf) {
      if (overrides) {
        nconf.overrides(overrides);
      }
      nconf.argv()
        .env()
        .file({file: 'conf/defaults.yml', format: require('nconf-yaml')});
      init.services.nconf = nconf;
    }
    return init;
  },

  shutdown: (disableExit) => {
    winston.info('Stopping all services.');
    if (init.services.server) {
      return new Promise(resolve => {
        init.services.server.close(resolve);
      })
      .then(() => {
        winston.info(`Stopped all services. Exiting application.`);
        if (!disableExit) {
          process.exit(0);
        }
      })
      .catch(error => {
        winston.error(`Failed to stop all services. ${error}. Exiting application.`, error);
        if (!disableExit) {
          process.exit(1);
        }
      });
    }
  },

  sigterm: () => {
    if (!init.services.sigterm) {
      init.conf().logger();
      process.on('SIGINT', init.shutdown).on('SIGTERM', init.shutdown);
      init.services.sigterm = true;
      winston.info('Initialized sigterm handler');
    }
    return init;
  },

  logger: () => {
    if (!init.services.winston) {
      init.conf();
      winston.remove(winston.transports.Console);
      const winstonConf = nconf.get('winston');
      if (winstonConf.console.enabled) {
        winston.add(winston.transports.Console, winstonConf.console);
      }
      init.services.winston = winston;
      winston.info('Initialized logger');
    }
    return init;
  },

  all: () => {
    init
      .server()
      .sigterm();
    winston.info('Initialized full stack');
    return init;
  },

  server: (onReady) => {
    if (!init.services.server) {
      init.conf().logger();
      const app = require('express')();
      const serverConf = nconf.get('server');
      const routes = require('./routes');
      routes.registerRoutes(app, init.services.site);

      const server = app.listen(serverConf.port, serverConf.host, () => {
        winston.info(`Server listening on ${serverConf.host}:${serverConf.port}`);
        if(onReady) {
          onReady();
        }
      });
      init.services.server = server;
      init.services.app = app;
      winston.info('Initialized server');
    }
    return init;
  }

};
