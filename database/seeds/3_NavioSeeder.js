'use strict'

/*
|--------------------------------------------------------------------------
| NavioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Navio = use('App/Models/Navio')

class NavioSeeder {
  async run () {
    await Navio.createMany([
      {id: 1, nome: 'v34 vermalem', categoria_id: 1, base_naval_id: 1},// tira deslocamento deslocamento, comprimento e velocidade
      {id: 2, nome: 'v36 angela', categoria_id: 2, base_naval_id: 1},
      {id: 3, nome: 'v33 lectro', categoria_id: 3, base_naval_id: 1},
      {id: 4, nome: 'v31 viper', categoria_id: 4, base_naval_id: 1},
    ])
  }
}

module.exports = NavioSeeder
