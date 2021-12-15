'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OperacaoSchema extends Schema {
  up () {
    this.create('operacao', (table) => {
      table.increments()
      table.string('missao', 50).notNullable()
      table.string('local', 50).notNullable()
      table.date('data')
      table.integer('navio_id').references('id').inTable('navios').unsigned().notNullable()
      table.integer('base_naval_id').references('id').inTable('base_navais').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('operacao')
  }
}

module.exports = OperacaoSchema
