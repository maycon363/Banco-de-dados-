'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BaseNaval extends Model {

    static get table(){
        return 'base_naval'
    }

    navios(){
        return this.hasMany('App/Models/Navio')
    }

    operacoes(){
        return this.hasMany('App/Models/Operacao')
    }
}

module.exports = BaseNaval
