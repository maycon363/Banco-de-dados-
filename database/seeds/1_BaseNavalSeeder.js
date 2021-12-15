'use strict'

/*
|--------------------------------------------------------------------------
| BaseNavalSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const BaseNaval = use('App/Models/BaseNaval')

class BaseNavalSeeder {
  async run () {
    await BaseNaval.createMany([
      {id: 1, nome: '1º base naval', local: 'rio de janeiro', marinheiros: 7.258, fundacao: 1822-6-20}
    ])
  }
}
module.exports = BaseNavalSeeder
