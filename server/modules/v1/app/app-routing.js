'use strict';

/**
 * App Router
 *
 * @module
 * @author Marcelo Rusconi <mgrusconi@gmail.com>
 */

const Router = require('express');
const controller = require('./app-controller');

const router = new Router();

router.route('/radar').post((...args) => controller.radar(...args));

module.exports = router;