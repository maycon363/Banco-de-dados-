'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Categoria extends ValidatorAbstract {
  get rules () {
    return {
      classe: 'required|max:50|min:5', 
      detalhe_id: 'integer|required'
    }
  }
}

module.exports = Categoria
