'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriaSchema extends Schema {
  up () {
    this.create('categorias', (table) => {
      table.increments()
      table.string('classe', 50).notNullable()
      table.integer('detalhe_id').references('id').inTable('detalhes').unsigned().notNullable()
      table.timestamps()
    })
  }
  down () {
    this.drop('categorias')
  }
}

module.exports = CategoriaSchema