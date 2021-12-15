'use strict'

/*
|--------------------------------------------------------------------------
| DetalheSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Detalhes = use('App/Models/Detalhes')

class DetalhesSeeder {
  async run () {
    await Detalhes.createMany([
      {id: 1, canhao: 'bae systems 30 mm', metralhadoras: '.50', misseis: 'não possui', torpedos: 'não possui', helicoptero: 0},
      {id: 2, canhao: 'bae systems 60 mm', metralhadoras: '.50', misseis: 'mansup', torpedos: 'mk 52', helicoptero: 1},
      {id: 3, canhao: 'bae systems 72 mm', metralhadoras: '.50', misseis: 'C-802 Noor', torpedos: 'mk 52', helicoptero: 1},
      {id: 4, canhao: 'bae systems 133 mm', metralhadoras: '.50', misseis: 'AGM-88 HARM', torpedos: 'mk 54', helicoptero: 2},
    ])
  }
}

module.exports = DetalhesSeeder
