'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Detalhes extends ValidatorAbstract {
  get rules () {
    return {
      canhao: 'required|max:50|min:5',
      metralhadoras: 'required|max:50|min:5',
      misseis: 'required|max:50|min:5',
      torpedos: 'required|max:50|min:4',
      helicoptero: 'integer'
    }
  }
}

module.exports = Detalhes
