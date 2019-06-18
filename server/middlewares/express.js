'use strict';

/**
 * Modulo que contiene la implementacion de Express.
 * Module containing the Express implementation.
 *
 * @module
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

const express = require('express');
const routings = require('../modules/v1/app/app-routing');
const bodyParser = require('body-parser');

function expressApp() {
    
  // App
  const app = express();

  // Request body parsing middleware should be above methodOverride
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  
  //Routing
  app.use('/', routings);

  return app;
}

module.exports = expressApp();