'use strict'

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

Route.resource('/users', 'UserController').apiOnly()
Route.post('/token', 'UserController.token')

Route.group(() => {
  Route.resource('/basenaval', 'BaseNavalController').apiOnly()
          .validator(new Map([
           [['store', 'update'], 'BaseNaval'],
          ])) 
Route.resource('/operacao', 'OperacaoController').apiOnly()
          .validator(new Map([
           [['store', 'update'], 'Operacao'],
          ])) 
Route.resource('/navio', 'NavioController').apiOnly()
          .validator(new Map([
           [['store', 'update'], 'Navio'],
          ])) 
Route.resource('/categoria', 'CategoriaController').apiOnly()
          .validator(new Map([
           [['store', 'update'], 'Categoria'],
          ])) 
Route.resource('/detalhes', 'DetalhesController').apiOnly()
          .validator(new Map([
           [['store', 'update'], 'Detalhes'],
          ]))   
}).middleware('auth')
