"use strict";

const chai = require('chai'),
  chaiProperties = require('chai-properties'),
  chaiAsPromised = require("chai-as-promised"),
  sinonChai = require("sinon-chai");

chai.config.truncateThreshold = 0;
chai.config.showDiff = true;
chai.config.includeStack = true;
chai.should();
chai.use(sinonChai);
chai.use(chaiProperties);
chai.use(chaiAsPromised);