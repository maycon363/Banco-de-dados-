'use strict'

/*
|--------------------------------------------------------------------------
| OperacaoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Operacao = use('App/Models/Operacao')

class OperacaoSeeder {
  async run () {
    await Operacao.createMany([
      {id: 1, missao: 'trafico de drogas', local: 'rio de janeiro', data: 1822-6-20, navio_id: 1, base_naval_id: 1},
      {id: 2, missao: 'escolta', local: 'rio de janeiro', data: 1822-6-20, navio_id: 2, base_naval_id: 1},
    ])
  }
}

module.exports = OperacaoSeeder
