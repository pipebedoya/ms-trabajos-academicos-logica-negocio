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
AreaInvestigacion,
JuradoXAreaInvestigacion,
Jurado,
} from '../models';
import {AreaInvestigacionRepository} from '../repositories';

export class AreaInvestigacionJuradoController {
  constructor(
    @repository(AreaInvestigacionRepository) protected areaInvestigacionRepository: AreaInvestigacionRepository,
  ) { }

  @get('/area-investigacions/{id}/jurados', {
    responses: {
      '200': {
        description: 'Array of AreaInvestigacion has many Jurado through JuradoXAreaInvestigacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Jurado)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Jurado>,
  ): Promise<Jurado[]> {
    return this.areaInvestigacionRepository.jurados(id).find(filter);
  }

  @post('/area-investigacions/{id}/jurados', {
    responses: {
      '200': {
        description: 'create a Jurado model instance',
        content: {'application/json': {schema: getModelSchemaRef(Jurado)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof AreaInvestigacion.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jurado, {
            title: 'NewJuradoInAreaInvestigacion',
            exclude: ['id'],
          }),
        },
      },
    }) jurado: Omit<Jurado, 'id'>,
  ): Promise<Jurado> {
    return this.areaInvestigacionRepository.jurados(id).create(jurado);
  }

  @patch('/area-investigacions/{id}/jurados', {
    responses: {
      '200': {
        description: 'AreaInvestigacion.Jurado PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jurado, {partial: true}),
        },
      },
    })
    jurado: Partial<Jurado>,
    @param.query.object('where', getWhereSchemaFor(Jurado)) where?: Where<Jurado>,
  ): Promise<Count> {
    return this.areaInvestigacionRepository.jurados(id).patch(jurado, where);
  }

  @del('/area-investigacions/{id}/jurados', {
    responses: {
      '200': {
        description: 'AreaInvestigacion.Jurado DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Jurado)) where?: Where<Jurado>,
  ): Promise<Count> {
    return this.areaInvestigacionRepository.jurados(id).delete(where);
  }
}
