'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetalhesSchema extends Schema {
  up () {
    this.create('detalhes', (table) => {
      table.increments()
      table.string('canhao', 50).notNullable()
      table.string('metralhadoras', 50).notNullable()
      table.string('misseis', 50)
      table.string('torpedos', 50)
      table.integer('helicoptero')
      table.timestamps()
    })
  }

  down () {
    this.drop('detalhes')
  }
}

module.exports = DetalhesSchema
