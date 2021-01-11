'use strict'
const Request = require('@adonisjs/framework/src/Request')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Cantidade {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    // call next to advance the request

    if (request.header('cantidad') >= 3){
       await next()
    }
    else{
    return response.status(400).json({mensaje:'Cantidad minima en el header 2'})
   }
  }
}

module.exports = Cantidade


