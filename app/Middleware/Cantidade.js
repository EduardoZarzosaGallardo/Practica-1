'use strict'
const Request = require('@adonisjs/framework/src/Request')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const geoip=require('geoip-lite')

class Cantidade {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next,response) {
    // call next to advance the request
    
    const edad = request.edad()
    if (edad <18){
      return await response.json({message:"eeeee"}) 
    }
    await next()
  }
}

module.exports = Cantidade


