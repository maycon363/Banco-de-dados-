'use strict'

const Navio = use('App/Models/Navio')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with navios
 */
class NavioController {
  /**
   * Show a list of all navios.
   * GET navios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
  
    perPage = perPage ? perPage : 5
    
    return Navio.query().paginate(page, perPage)
  }

  /**
   * Create/save a new navio.
   * POST navios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = request.only(['nome', 'categoria_id', 'base_naval_id'])
    return await Navio.create(campos)
  }

  /**
   * Display a single navio.
   * GET navios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Navio.query().with('categoria').with('basenaval').where('id', params.id).first();
  }

  /**
   * Update navio details.
   * PUT or PATCH navios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const navio =  await Navio.findOrFail(params.id);
    const campos = request.only(['nome', 'categoria_id', 'base_naval_id'])
    
    navio.merge(campos)
    navio.save()
  }

  /**
   * Delete a navio with id.
   * DELETE navios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const navio = await Navio.findOrFail(params.id)
    return await navio.delete();
  }
}

module.exports = NavioController
