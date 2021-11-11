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
import {ProponenteXSolicitud} from '../models';
import {ProponenteXSolicitudRepository} from '../repositories';

export class ProponenteXSolicitudController {
  constructor(
    @repository(ProponenteXSolicitudRepository)
    public proponenteXSolicitudRepository : ProponenteXSolicitudRepository,
  ) {}

  @post('/proponentes-x-solicitudes')
  @response(200, {
    description: 'ProponenteXSolicitud model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProponenteXSolicitud)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProponenteXSolicitud, {
            title: 'NewProponenteXSolicitud',
            exclude: ['id'],
          }),
        },
      },
    })
    proponenteXSolicitud: Omit<ProponenteXSolicitud, 'id'>,
  ): Promise<ProponenteXSolicitud> {
    return this.proponenteXSolicitudRepository.create(proponenteXSolicitud);
  }

  @get('/proponentes-x-solicitudes/count')
  @response(200, {
    description: 'ProponenteXSolicitud model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProponenteXSolicitud) where?: Where<ProponenteXSolicitud>,
  ): Promise<Count> {
    return this.proponenteXSolicitudRepository.count(where);
  }

  @get('/proponentes-x-solicitudes')
  @response(200, {
    description: 'Array of ProponenteXSolicitud model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProponenteXSolicitud, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProponenteXSolicitud) filter?: Filter<ProponenteXSolicitud>,
  ): Promise<ProponenteXSolicitud[]> {
    return this.proponenteXSolicitudRepository.find(filter);
  }

  @patch('/proponentes-x-solicitudes')
  @response(200, {
    description: 'ProponenteXSolicitud PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProponenteXSolicitud, {partial: true}),
        },
      },
    })
    proponenteXSolicitud: ProponenteXSolicitud,
    @param.where(ProponenteXSolicitud) where?: Where<ProponenteXSolicitud>,
  ): Promise<Count> {
    return this.proponenteXSolicitudRepository.updateAll(proponenteXSolicitud, where);
  }

  @get('/proponentes-x-solicitudes/{id}')
  @response(200, {
    description: 'ProponenteXSolicitud model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProponenteXSolicitud, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProponenteXSolicitud, {exclude: 'where'}) filter?: FilterExcludingWhere<ProponenteXSolicitud>
  ): Promise<ProponenteXSolicitud> {
    return this.proponenteXSolicitudRepository.findById(id, filter);
  }

  @patch('/proponentes-x-solicitudes/{id}')
  @response(204, {
    description: 'ProponenteXSolicitud PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProponenteXSolicitud, {partial: true}),
        },
      },
    })
    proponenteXSolicitud: ProponenteXSolicitud,
  ): Promise<void> {
    await this.proponenteXSolicitudRepository.updateById(id, proponenteXSolicitud);
  }

  @put('/proponentes-x-solicitudes/{id}')
  @response(204, {
    description: 'ProponenteXSolicitud PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() proponenteXSolicitud: ProponenteXSolicitud,
  ): Promise<void> {
    await this.proponenteXSolicitudRepository.replaceById(id, proponenteXSolicitud);
  }

  @del('/proponentes-x-solicitudes/{id}')
  @response(204, {
    description: 'ProponenteXSolicitud DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.proponenteXSolicitudRepository.deleteById(id);
  }
}
