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
import {JuradoXAreaInvestigacion} from '../models';
import {JuradoXAreaInvestigacionRepository} from '../repositories';

export class JuradoXAreaInvestigacionController {
  constructor(
    @repository(JuradoXAreaInvestigacionRepository)
    public juradoXAreaInvestigacionRepository : JuradoXAreaInvestigacionRepository,
  ) {}

  @post('/jurado-x-areas-investigaciones')
  @response(200, {
    description: 'JuradoXAreaInvestigacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(JuradoXAreaInvestigacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(JuradoXAreaInvestigacion, {
            title: 'NewJuradoXAreaInvestigacion',
            exclude: ['id'],
          }),
        },
      },
    })
    juradoXAreaInvestigacion: Omit<JuradoXAreaInvestigacion, 'id'>,
  ): Promise<JuradoXAreaInvestigacion> {
    return this.juradoXAreaInvestigacionRepository.create(juradoXAreaInvestigacion);
  }

  @get('/jurado-x-areas-investigaciones/count')
  @response(200, {
    description: 'JuradoXAreaInvestigacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(JuradoXAreaInvestigacion) where?: Where<JuradoXAreaInvestigacion>,
  ): Promise<Count> {
    return this.juradoXAreaInvestigacionRepository.count(where);
  }

  @get('/jurado-x-areas-investigaciones')
  @response(200, {
    description: 'Array of JuradoXAreaInvestigacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(JuradoXAreaInvestigacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(JuradoXAreaInvestigacion) filter?: Filter<JuradoXAreaInvestigacion>,
  ): Promise<JuradoXAreaInvestigacion[]> {
    return this.juradoXAreaInvestigacionRepository.find(filter);
  }

  @patch('/jurado-x-areas-investigaciones')
  @response(200, {
    description: 'JuradoXAreaInvestigacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(JuradoXAreaInvestigacion, {partial: true}),
        },
      },
    })
    juradoXAreaInvestigacion: JuradoXAreaInvestigacion,
    @param.where(JuradoXAreaInvestigacion) where?: Where<JuradoXAreaInvestigacion>,
  ): Promise<Count> {
    return this.juradoXAreaInvestigacionRepository.updateAll(juradoXAreaInvestigacion, where);
  }

  @get('/jurado-x-areas-investigaciones/{id}')
  @response(200, {
    description: 'JuradoXAreaInvestigacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(JuradoXAreaInvestigacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(JuradoXAreaInvestigacion, {exclude: 'where'}) filter?: FilterExcludingWhere<JuradoXAreaInvestigacion>
  ): Promise<JuradoXAreaInvestigacion> {
    return this.juradoXAreaInvestigacionRepository.findById(id, filter);
  }

  @patch('/jurado-x-areas-investigaciones/{id}')
  @response(204, {
    description: 'JuradoXAreaInvestigacion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(JuradoXAreaInvestigacion, {partial: true}),
        },
      },
    })
    juradoXAreaInvestigacion: JuradoXAreaInvestigacion,
  ): Promise<void> {
    await this.juradoXAreaInvestigacionRepository.updateById(id, juradoXAreaInvestigacion);
  }

  @put('/jurado-x-areas-investigaciones/{id}')
  @response(204, {
    description: 'JuradoXAreaInvestigacion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() juradoXAreaInvestigacion: JuradoXAreaInvestigacion,
  ): Promise<void> {
    await this.juradoXAreaInvestigacionRepository.replaceById(id, juradoXAreaInvestigacion);
  }

  @del('/jurado-x-areas-investigaciones/{id}')
  @response(204, {
    description: 'JuradoXAreaInvestigacion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.juradoXAreaInvestigacionRepository.deleteById(id);
  }
}
