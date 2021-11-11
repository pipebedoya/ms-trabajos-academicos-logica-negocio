import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ComiteXSolicitud} from '../models';
import {ComiteXSolicitudRepository} from '../repositories';

export class ComiteXSolicitudController {
  constructor(
    @repository(ComiteXSolicitudRepository)
    public comiteXSolicitudRepository : ComiteXSolicitudRepository,
  ) {}

  @post('/comite-solicitud')
  @response(200, {
    description: 'ComiteXSolicitud model instance',
    content: {'application/json': {schema: getModelSchemaRef(ComiteXSolicitud)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComiteXSolicitud, {
            title: 'NewComiteXSolicitud',
            exclude: ['id'],
          }),
        },
      },
    })
    comiteXSolicitud: Omit<ComiteXSolicitud, 'id'>,
  ): Promise<ComiteXSolicitud> {
    return this.comiteXSolicitudRepository.create(comiteXSolicitud);
  }

  @get('/comite-solicitud/count')
  @response(200, {
    description: 'ComiteXSolicitud model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ComiteXSolicitud) where?: Where<ComiteXSolicitud>,
  ): Promise<Count> {
    return this.comiteXSolicitudRepository.count(where);
  }

  @get('/comite-solicitud')
  @response(200, {
    description: 'Array of ComiteXSolicitud model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ComiteXSolicitud, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ComiteXSolicitud) filter?: Filter<ComiteXSolicitud>,
  ): Promise<ComiteXSolicitud[]> {
    return this.comiteXSolicitudRepository.find(filter);
  }

  @patch('/comite-solicitud')
  @response(200, {
    description: 'ComiteXSolicitud PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComiteXSolicitud, {partial: true}),
        },
      },
    })
    comiteXSolicitud: ComiteXSolicitud,
    @param.where(ComiteXSolicitud) where?: Where<ComiteXSolicitud>,
  ): Promise<Count> {
    return this.comiteXSolicitudRepository.updateAll(comiteXSolicitud, where);
  }

  @get('/comite-solicitud/{id}')
  @response(200, {
    description: 'ComiteXSolicitud model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ComiteXSolicitud, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ComiteXSolicitud, {exclude: 'where'}) filter?: FilterExcludingWhere<ComiteXSolicitud>
  ): Promise<ComiteXSolicitud> {
    return this.comiteXSolicitudRepository.findById(id, filter);
  }

  @patch('/comite-solicitud/{id}')
  @response(204, {
    description: 'ComiteXSolicitud PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComiteXSolicitud, {partial: true}),
        },
      },
    })
    comiteXSolicitud: ComiteXSolicitud,
  ): Promise<void> {
    await this.comiteXSolicitudRepository.updateById(id, comiteXSolicitud);
  }

  @put('/comite-solicitud/{id}')
  @response(204, {
    description: 'ComiteXSolicitud PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() comiteXSolicitud: ComiteXSolicitud,
  ): Promise<void> {
    await this.comiteXSolicitudRepository.replaceById(id, comiteXSolicitud);
  }

  @del('/comite-solicitud/{id}')
  @response(204, {
    description: 'ComiteXSolicitud DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.comiteXSolicitudRepository.deleteById(id);
  }
}
