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
  ResultadoEvaluacion,
} from '../models';
import {EstadoRepository} from '../repositories';

export class EstadoResultadoEvaluacionController {
  constructor(
    @repository(EstadoRepository) protected estadoRepository: EstadoRepository,
  ) { }

  @get('/estados/{id}/resultado-evaluacion', {
    responses: {
      '200': {
        description: 'Estado has one ResultadoEvaluacion',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ResultadoEvaluacion),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ResultadoEvaluacion>,
  ): Promise<ResultadoEvaluacion> {
    return this.estadoRepository.resultadoEvaluacion(id).get(filter);
  }

  @post('/estados/{id}/resultado-evaluacion', {
    responses: {
      '200': {
        description: 'Estado model instance',
        content: {'application/json': {schema: getModelSchemaRef(ResultadoEvaluacion)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Estado.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultadoEvaluacion, {
            title: 'NewResultadoEvaluacionInEstado',
            exclude: ['id'],
            optional: ['id_estado']
          }),
        },
      },
    }) resultadoEvaluacion: Omit<ResultadoEvaluacion, 'id'>,
  ): Promise<ResultadoEvaluacion> {
    return this.estadoRepository.resultadoEvaluacion(id).create(resultadoEvaluacion);
  }

  @patch('/estados/{id}/resultado-evaluacion', {
    responses: {
      '200': {
        description: 'Estado.ResultadoEvaluacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultadoEvaluacion, {partial: true}),
        },
      },
    })
    resultadoEvaluacion: Partial<ResultadoEvaluacion>,
    @param.query.object('where', getWhereSchemaFor(ResultadoEvaluacion)) where?: Where<ResultadoEvaluacion>,
  ): Promise<Count> {
    return this.estadoRepository.resultadoEvaluacion(id).patch(resultadoEvaluacion, where);
  }

  @del('/estados/{id}/resultado-evaluacion', {
    responses: {
      '200': {
        description: 'Estado.ResultadoEvaluacion DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ResultadoEvaluacion)) where?: Where<ResultadoEvaluacion>,
  ): Promise<Count> {
    return this.estadoRepository.resultadoEvaluacion(id).delete(where);
  }
}
