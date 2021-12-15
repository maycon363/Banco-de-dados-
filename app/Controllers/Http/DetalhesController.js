'use strict'

const Detalhes = use('App/Models/Detalhes')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with detalhess
 */
class DetalhesController {
  /**
   * Show a list of all detalhess.
   * GET detalhess
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
  
    perPage = perPage ? perPage : 5
    
    return Detalhes.query().paginate(page, perPage)
  }

  /**
   * Create/save a new detalhes.
   * POST detalhess
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = request.only(['canhao', 'metralhadoras', 'misseis', 'torpedos', 'helicoptero'])
    return await Detalhes.create(campos)
  }

  /**
   * Display a single detalhes.
   * GET detalhess/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Detalhes.query().with('categoria').where('id', params.id).first();
  }

  /**
   * Update detalhes details.
   * PUT or PATCH detalhess/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const detalhes =  await Detalhes.findOrFail(params.id);
    const campos = request.only(['canhao', 'metralhadoras', 'misseis', 'torpedos', 'helicoptero'])
    
    detalhes.merge(campos)
    detalhes.save()
  }

  /**
   * Delete a detalhes with id.
   * DELETE detalhess/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const detalhes = await Detalhes.findOrFail(params.id)
    return await detalhes.delete();
  }
}

module.exports = DetalhesController
