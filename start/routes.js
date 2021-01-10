'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

///////////////////////////////////////////////
// Get productos con parametros opcionales ID
Route.get('productos/:id?','ProductoController.elGet')
// Post productos
Route.post('productos/','ProductoController.elPost')//.middleware(['cantidad'])
// Update productos por parametro ID
Route.put('productos/:id','ProductoController.elUpdate')
// Delete productos por parametro ID
Route.delete('productos/:id','ProductoController.elDelete')