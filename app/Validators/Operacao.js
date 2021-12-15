'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Operacao extends ValidatorAbstract {
  get rules () {
    return {
      missao: 'required|max:50|min:5',
      local: 'required|max:50|min:5',
      date: 'date|min:8',
      navio_id: 'integer|required',
      base_naval_id: 'integer|required'
    }
  }
}

module.exports = Operacao
