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
  Formato,
  TipoSolicitud,
} from '../models';
import {FormatoRepository} from '../repositories';

export class FormatoTipoSolicitudController {
  constructor(
    @repository(FormatoRepository) protected formatoRepository: FormatoRepository,
  ) { }

  @get('/formatoes/{id}/tipo-solicitud', {
    responses: {
      '200': {
        description: 'Formato has one TipoSolicitud',
        content: {
          'application/json': {
            schema: getModelSchemaRef(TipoSolicitud),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<TipoSolicitud>,
  ): Promise<TipoSolicitud> {
    return this.formatoRepository.tipoSolicitud(id).get(filter);
  }

  @post('/formatoes/{id}/tipo-solicitud', {
    responses: {
      '200': {
        description: 'Formato model instance',
        content: {'application/json': {schema: getModelSchemaRef(TipoSolicitud)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Formato.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoSolicitud, {
            title: 'NewTipoSolicitudInFormato',
            exclude: ['id'],
            optional: ['id_formato']
          }),
        },
      },
    }) tipoSolicitud: Omit<TipoSolicitud, 'id'>,
  ): Promise<TipoSolicitud> {
    return this.formatoRepository.tipoSolicitud(id).create(tipoSolicitud);
  }

  @patch('/formatoes/{id}/tipo-solicitud', {
    responses: {
      '200': {
        description: 'Formato.TipoSolicitud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoSolicitud, {partial: true}),
        },
      },
    })
    tipoSolicitud: Partial<TipoSolicitud>,
    @param.query.object('where', getWhereSchemaFor(TipoSolicitud)) where?: Where<TipoSolicitud>,
  ): Promise<Count> {
    return this.formatoRepository.tipoSolicitud(id).patch(tipoSolicitud, where);
  }

  @del('/formatoes/{id}/tipo-solicitud', {
    responses: {
      '200': {
        description: 'Formato.TipoSolicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(TipoSolicitud)) where?: Where<TipoSolicitud>,
  ): Promise<Count> {
    return this.formatoRepository.tipoSolicitud(id).delete(where);
  }
}
