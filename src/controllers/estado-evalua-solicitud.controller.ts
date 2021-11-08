import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Estado,
  EvaluaSolicitud,
} from '../models';
import {EstadoRepository} from '../repositories';

export class EstadoEvaluaSolicitudController {
  constructor(
    @repository(EstadoRepository) protected estadoRepository: EstadoRepository,
  ) { }

  @get('/estados/{id}/evalua-solicitud', {
    responses: {
      '200': {
        description: 'Estado has one EvaluaSolicitud',
        content: {
          'application/json': {
            schema: getModelSchemaRef(EvaluaSolicitud),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<EvaluaSolicitud>,
  ): Promise<EvaluaSolicitud> {
    return this.estadoRepository.evaluaSolicitud(id).get(filter);
  }

  @post('/estados/{id}/evalua-solicitud', {
    responses: {
      '200': {
        description: 'Estado model instance',
        content: {'application/json': {schema: getModelSchemaRef(EvaluaSolicitud)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Estado.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EvaluaSolicitud, {
            title: 'NewEvaluaSolicitudInEstado',
            exclude: ['id'],
            optional: ['id_estado']
          }),
        },
      },
    }) evaluaSolicitud: Omit<EvaluaSolicitud, 'id'>,
  ): Promise<EvaluaSolicitud> {
    return this.estadoRepository.evaluaSolicitud(id).create(evaluaSolicitud);
  }

  @patch('/estados/{id}/evalua-solicitud', {
    responses: {
      '200': {
        description: 'Estado.EvaluaSolicitud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EvaluaSolicitud, {partial: true}),
        },
      },
    })
    evaluaSolicitud: Partial<EvaluaSolicitud>,
    @param.query.object('where', getWhereSchemaFor(EvaluaSolicitud)) where?: Where<EvaluaSolicitud>,
  ): Promise<Count> {
    return this.estadoRepository.evaluaSolicitud(id).patch(evaluaSolicitud, where);
  }

  @del('/estados/{id}/evalua-solicitud', {
    responses: {
      '200': {
        description: 'Estado.EvaluaSolicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(EvaluaSolicitud)) where?: Where<EvaluaSolicitud>,
  ): Promise<Count> {
    return this.estadoRepository.evaluaSolicitud(id).delete(where);
  }
}
