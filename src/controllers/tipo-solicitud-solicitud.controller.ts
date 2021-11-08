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
  TipoSolicitud,
  Solicitud,
} from '../models';
import {TipoSolicitudRepository} from '../repositories';

export class TipoSolicitudSolicitudController {
  constructor(
    @repository(TipoSolicitudRepository) protected tipoSolicitudRepository: TipoSolicitudRepository,
  ) { }

  @get('/tipo-solicituds/{id}/solicitud', {
    responses: {
      '200': {
        description: 'TipoSolicitud has one Solicitud',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Solicitud),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Solicitud>,
  ): Promise<Solicitud> {
    return this.tipoSolicitudRepository.solicitud(id).get(filter);
  }

  @post('/tipo-solicituds/{id}/solicitud', {
    responses: {
      '200': {
        description: 'TipoSolicitud model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solicitud)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof TipoSolicitud.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {
            title: 'NewSolicitudInTipoSolicitud',
            exclude: ['id'],
            optional: ['id_tiposolicitud']
          }),
        },
      },
    }) solicitud: Omit<Solicitud, 'id'>,
  ): Promise<Solicitud> {
    return this.tipoSolicitudRepository.solicitud(id).create(solicitud);
  }

  @patch('/tipo-solicituds/{id}/solicitud', {
    responses: {
      '200': {
        description: 'TipoSolicitud.Solicitud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {partial: true}),
        },
      },
    })
    solicitud: Partial<Solicitud>,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.tipoSolicitudRepository.solicitud(id).patch(solicitud, where);
  }

  @del('/tipo-solicituds/{id}/solicitud', {
    responses: {
      '200': {
        description: 'TipoSolicitud.Solicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.tipoSolicitudRepository.solicitud(id).delete(where);
  }
}
