"use strict";

require('../init-integration');

const
  init = require('../../../lib'),
  pkg = require('../../../package'),
  _ = require('lodash'),
  should = require('chai').should(),
  HttpStatus = require('http-status-codes'),
  request = require('supertest');

describe('Root Route', () => {

  describe('GET /', () => {

    it('should return root endpoint', done => {

      request(init.services.app)
        .get('/')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(HttpStatus.OK)
        .expect(res => {
          res.body.should.have.properties({
            "commit": "NA",
            "node": "local-1",
            "version": pkg.version
          });
        })
        .end(err => {
          if (err) {
            throw err;
          }
          done();
        });
    });
  });
});