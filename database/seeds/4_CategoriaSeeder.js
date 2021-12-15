'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Categoria = use('App/Models/Categoria')

class CategoriaSeeder {
  async run () {
    await Categoria.createMany([
      {id: 1, classe: 'navio-patrulha', detalhe_id: 1},
      {id: 2, classe: 'corveta', detalhe_id: 2},
      {id: 3, classe: 'fragata', detalhe_id: 3},
      {id: 4, classe: 'destroyer', detalhe_id: 4}
    ])
  }
}

module.exports = CategoriaSeeder
