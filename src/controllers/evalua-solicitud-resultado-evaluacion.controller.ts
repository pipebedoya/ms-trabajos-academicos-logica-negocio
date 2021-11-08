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
  EvaluaSolicitud,
  ResultadoEvaluacion,
} from '../models';
import {EvaluaSolicitudRepository} from '../repositories';

export class EvaluaSolicitudResultadoEvaluacionController {
  constructor(
    @repository(EvaluaSolicitudRepository) protected evaluaSolicitudRepository: EvaluaSolicitudRepository,
  ) { }

  @get('/evalua-solicituds/{id}/resultado-evaluacion', {
    responses: {
      '200': {
        description: 'EvaluaSolicitud has one ResultadoEvaluacion',
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
    return this.evaluaSolicitudRepository.resultadoEvaluacion(id).get(filter);
  }

  @post('/evalua-solicituds/{id}/resultado-evaluacion', {
    responses: {
      '200': {
        description: 'EvaluaSolicitud model instance',
        content: {'application/json': {schema: getModelSchemaRef(ResultadoEvaluacion)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof EvaluaSolicitud.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultadoEvaluacion, {
            title: 'NewResultadoEvaluacionInEvaluaSolicitud',
            exclude: ['id'],
            optional: ['id_evaluacionsolicitud']
          }),
        },
      },
    }) resultadoEvaluacion: Omit<ResultadoEvaluacion, 'id'>,
  ): Promise<ResultadoEvaluacion> {
    return this.evaluaSolicitudRepository.resultadoEvaluacion(id).create(resultadoEvaluacion);
  }

  @patch('/evalua-solicituds/{id}/resultado-evaluacion', {
    responses: {
      '200': {
        description: 'EvaluaSolicitud.ResultadoEvaluacion PATCH success count',
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
    return this.evaluaSolicitudRepository.resultadoEvaluacion(id).patch(resultadoEvaluacion, where);
  }

  @del('/evalua-solicituds/{id}/resultado-evaluacion', {
    responses: {
      '200': {
        description: 'EvaluaSolicitud.ResultadoEvaluacion DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ResultadoEvaluacion)) where?: Where<ResultadoEvaluacion>,
  ): Promise<Count> {
    return this.evaluaSolicitudRepository.resultadoEvaluacion(id).delete(where);
  }
}
