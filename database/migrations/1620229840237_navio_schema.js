'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NavioSchema extends Schema {
  up () {
    this.create('navios', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.integer('categoria_id').references('id').inTable('categoria').unsigned().notNullable()
      table.integer('base_naval_id').references('id').inTable('base_naval').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('navios')
  }
}

module.exports = NavioSchema
