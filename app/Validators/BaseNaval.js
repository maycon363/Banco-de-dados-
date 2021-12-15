'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class BaseNaval extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:50|min:5',
      local: 'required|max:50|min:5',
      marinheiros: 'integer',
      fundacao: 'date|min:8'
    }
  }
}

module.exports = BaseNaval
