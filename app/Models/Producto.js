'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Producto extends Model {
    static get table(){
        return 'productos'
    }
}

module.exports = Producto
