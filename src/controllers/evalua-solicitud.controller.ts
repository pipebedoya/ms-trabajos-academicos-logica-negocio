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
import {EvaluaSolicitud} from '../models';
import {EvaluaSolicitudRepository} from '../repositories';

export class EvaluaSolicitudController {
  constructor(
    @repository(EvaluaSolicitudRepository)
    public evaluaSolicitudRepository : EvaluaSolicitudRepository,
  ) {}

  @post('/evalua-solicitudes')
  @response(200, {
    description: 'EvaluaSolicitud model instance',
    content: {'application/json': {schema: getModelSchemaRef(EvaluaSolicitud)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EvaluaSolicitud, {
            title: 'NewEvaluaSolicitud',
            exclude: ['id'],
          }),
        },
      },
    })
    evaluaSolicitud: Omit<EvaluaSolicitud, 'id'>,
  ): Promise<EvaluaSolicitud> {
    return this.evaluaSolicitudRepository.create(evaluaSolicitud);
  }

  @get('/evalua-solicitudes/count')
  @response(200, {
    description: 'EvaluaSolicitud model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(EvaluaSolicitud) where?: Where<EvaluaSolicitud>,
  ): Promise<Count> {
    return this.evaluaSolicitudRepository.count(where);
  }

  @get('/evalua-solicitudes')
  @response(200, {
    description: 'Array of EvaluaSolicitud model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(EvaluaSolicitud, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(EvaluaSolicitud) filter?: Filter<EvaluaSolicitud>,
  ): Promise<EvaluaSolicitud[]> {
    return this.evaluaSolicitudRepository.find(filter);
  }

  @patch('/evalua-solicitudes')
  @response(200, {
    description: 'EvaluaSolicitud PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EvaluaSolicitud, {partial: true}),
        },
      },
    })
    evaluaSolicitud: EvaluaSolicitud,
    @param.where(EvaluaSolicitud) where?: Where<EvaluaSolicitud>,
  ): Promise<Count> {
    return this.evaluaSolicitudRepository.updateAll(evaluaSolicitud, where);
  }

  @get('/evalua-solicitudes/{id}')
  @response(200, {
    description: 'EvaluaSolicitud model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(EvaluaSolicitud, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(EvaluaSolicitud, {exclude: 'where'}) filter?: FilterExcludingWhere<EvaluaSolicitud>
  ): Promise<EvaluaSolicitud> {
    return this.evaluaSolicitudRepository.findById(id, filter);
  }

  @patch('/evalua-solicitudes/{id}')
  @response(204, {
    description: 'EvaluaSolicitud PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EvaluaSolicitud, {partial: true}),
        },
      },
    })
    evaluaSolicitud: EvaluaSolicitud,
  ): Promise<void> {
    await this.evaluaSolicitudRepository.updateById(id, evaluaSolicitud);
  }

  @put('/evalua-solicitudes/{id}')
  @response(204, {
    description: 'EvaluaSolicitud PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() evaluaSolicitud: EvaluaSolicitud,
  ): Promise<void> {
    await this.evaluaSolicitudRepository.replaceById(id, evaluaSolicitud);
  }

  @del('/evalua-solicitudes/{id}')
  @response(204, {
    description: 'EvaluaSolicitud DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.evaluaSolicitudRepository.deleteById(id);
  }
}
