'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Navio extends Model {

    categoria(){
        return this.belongsTo('App/Models/Categoria')
    }
    basenaval(){
        return this.belongsTo('App/Models/BaseNaval')
    }
}

module.exports = Navio
