'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Operacao extends Model {

    static get table(){
        return 'operacao'
    }

    basenaval(){
        return this.belongsTo('App/Models/BaseNaval')
    }

    navios(){
        return this.belongsTo('App/Models/Navio')
    }
}

module.exports = Operacao
