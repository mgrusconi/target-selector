'use strict';

/**
 * Helper
 *
 * NodeJS version ES6
 * @category Assessment
 * 
 * @module
 * @author   Marcelo Rusconi <mgrusconi@gmail.com>
 *
 */

class Helper {
  /**
   * Método que ordena por distancia.
   * Method that orders by distance.
   *
   * @param \ a, b
   * @return \Number
   */
  order(a, b) {
    if (Math.sqrt(Math.pow(a.coordinates.x, 2) + Math.pow(a.coordinates.y, 2)) < Math.sqrt(Math.pow(b.coordinates.x, 2) + Math.pow(b.coordinates.y, 2))) {
      return -1;
    }
    if (Math.sqrt(Math.pow(a.coordinates.x, 2) + Math.pow(a.coordinates.y, 2)) > Math.sqrt(Math.pow(b.coordinates.x, 2) + Math.pow(b.coordinates.y, 2))) {
      return 1;
    }
    return 0;
  }

  /**
   * Método que calcula la distancia.
   * Method that calculates the distance.
   *
   * @param \ scan
   * @return \Number
   */
  distance(scan) {
    return Math.sqrt(Math.pow(scan.coordinates.x, 2) + Math.pow(scan.coordinates.y, 2));
  }
}

module.exports = new Helper;