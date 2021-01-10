'use strict'

/*
|--------------------------------------------------------------------------
| ProductoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ProductoSeeder {
  static async run () {
    await Database.table('productos').insert([
      {
        'producto':'cocacola'
      },
      {
        'producto':'pepsi'
      },
      {
        'producto':'sabritas'
      },
    ])
  }


  async run()
  {
    await ProductoSeeder.run() 
    console.log('paraElFactory')
    await Factory
    .model('App/Models/Producto')
    .createMany(7)
  }
}

module.exports = ProductoSeeder
