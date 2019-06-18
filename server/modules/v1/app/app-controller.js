'use strict';


/**
 * AppController
 *
 * NodeJS version ES6
 * @category Assessment
 * 
 * @module
 * @author   Marcelo Rusconi <mgrusconi@gmail.com>
 *
 */


const helper = require('./helpers');
class AppController {

  /**
   * Método que retorna las cordenadas de ataque.
   * Method that returns the attack coordinates.
   *
   * @param \ req, res
   * @return \Json
   */
  radar(req, res) {
    const { protocols } = req.body;
    let { scan } = req.body;

    protocols.forEach(protocol => {
      switch (protocol) {
        case 'avoid-mech':
          scan = scan.filter(data => data.enemies.type !== 'mech');
          break;

        case 'prioritize-mech':
          const mech = scan.filter(data => data.enemies.type === 'mech');
          if (mech.length > 0) {
            scan = mech;
          }
          break;

        case 'avoid-crossfire':
          scan = scan.filter(data => !data.allies);
          break;

        case 'closest-enemies':
          scan = scan.sort(helper.order);
          break;

        case 'furthest-enemies':
          scan = scan.filter(data => helper.distance(data) <= 100).sort(helper.order).reverse();
          break;

        case 'assist-allies':
          const allies = scan.filter(data => data.allies);
          if (allies.length > 0) {
            scan = allies;
          }
          break;
      }
    });

    return res.status(200).json({ "x": scan[0].coordinates.x, "y": scan[0].coordinates.y });
  }

}

module.exports = new AppController;