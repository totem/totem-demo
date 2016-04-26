"use strict";

require('../init-chai');

const init = require('../../lib');

before(cb => {
  init.server(cb);
});

after(() => {
  return Promise.all([
    init.shutdown(true)]);
});