'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string('producto',30)
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
