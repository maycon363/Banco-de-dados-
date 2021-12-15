'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BaseNavalSchema extends Schema {
  up () {
    this.create('base_naval', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.string('local', 50).notNullable()
      table.integer('marinheiros')
      table.date('fundacao')
      table.timestamps()
    })
  }

  down () {
    this.drop('base_naval')
  }
}

module.exports = BaseNavalSchema
