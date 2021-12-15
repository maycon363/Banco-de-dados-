'use strict'

const BaseNaval = use('App/Models/BaseNaval')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with basenaval
 */
class BaseNavalController {
  /**
   * Show a list of all basenaval.
   * GET basenavals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
  
    perPage = perPage ? perPage : 5
  
    return BaseNaval.query().paginate(page, perPage);
  }

  /**
   * Create/save a new basenaval.
   * POST basenavals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = request.only(['nome', 'local', 'marinheiros', 'fundacao',])
    return await BaseNaval.create(campos)
  }

  /**
   * Display a single basenaval.
   * GET basenavals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await BaseNaval.query().with('navios').with('operacoes').where('id', params.id).first();
  }

  /**
   * Update basenaval details.
   * PUT or PATCH basenavals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const basenaval =  await BaseNaval.findOrFail(params.id);
    const campos = request.only(['nome', 'local', 'marinheiros', 'fundacao',])
    
    basenaval.merge(campos)
    basenaval.save()

    return basenaval
  }

  /**
   * Delete a basenaval with id.
   * DELETE basenavals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const basenaval = await BaseNaval.findOrFail(params.id)
    return await basenaval.delete();
  }
}

module.exports = BaseNavalController
