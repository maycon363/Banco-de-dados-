'use strict'

const Operacao = use('App/Models/Operacao')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with operacaos
 */
class OperacaoController {
  /**
   * Show a list of all operacaos.
   * GET operacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
  
    perPage = perPage ? perPage : 5

    
    return Operacao.query().paginate(page, perPage)
  }

  /**
   * Create/save a new operacao.
   * POST operacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = request.only(['missao', 'local', 'data', 'navio_id', 'base_naval_id',])
    return await Operacao.create(campos)
  }

  /**
   * Display a single operacao.
   * GET operacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Operacao.query().with('basenaval').with('navios').where('id', params.id).first();
  }

  /**
   * Update operacao details.
   * PUT or PATCH operacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const operacao =  await Operacao.findOrFail(params.id);
    const campos = request.only(['missao', 'local', 'data', 'navio_id', 'base_naval_id',])
    
    operacao.merge(campos)
    operacao.save()
  }

  /**
   * Delete a operacao with id.
   * DELETE operacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const operacao = await Operacao.findOrFail(params.id)
    return await operacao.delete();
  }
}

module.exports = OperacaoController
