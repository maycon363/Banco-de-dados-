'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Navio extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:50|min:5',
      categoria_id: 'integer|required',
      base_naval_id: 'integer|required'
    }
  }
}

module.exports = Navio
