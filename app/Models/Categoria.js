'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {

    detalhes(){
       return this.belongsTo('App/Models/Detalhes')
    }

}

module.exports = Categoria