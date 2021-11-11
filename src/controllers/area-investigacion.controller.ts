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
import {AreaInvestigacion} from '../models';
import {AreaInvestigacionRepository} from '../repositories';

export class AreaInvestigacionController {
  constructor(
    @repository(AreaInvestigacionRepository)
    public areaInvestigacionRepository : AreaInvestigacionRepository,
  ) {}

  @post('/areas-investigacion')
  @response(200, {
    description: 'AreaInvestigacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(AreaInvestigacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaInvestigacion, {
            title: 'NewAreaInvestigacion',
            exclude: ['id'],
          }),
        },
      },
    })
    areaInvestigacion: Omit<AreaInvestigacion, 'id'>,
  ): Promise<AreaInvestigacion> {
    return this.areaInvestigacionRepository.create(areaInvestigacion);
  }

  @get('/areas-investigacion/count')
  @response(200, {
    description: 'AreaInvestigacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AreaInvestigacion) where?: Where<AreaInvestigacion>,
  ): Promise<Count> {
    return this.areaInvestigacionRepository.count(where);
  }

  @get('/areas-investigacion')
  @response(200, {
    description: 'Array of AreaInvestigacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AreaInvestigacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AreaInvestigacion) filter?: Filter<AreaInvestigacion>,
  ): Promise<AreaInvestigacion[]> {
    return this.areaInvestigacionRepository.find(filter);
  }

  @patch('/areas-investigacion')
  @response(200, {
    description: 'AreaInvestigacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaInvestigacion, {partial: true}),
        },
      },
    })
    areaInvestigacion: AreaInvestigacion,
    @param.where(AreaInvestigacion) where?: Where<AreaInvestigacion>,
  ): Promise<Count> {
    return this.areaInvestigacionRepository.updateAll(areaInvestigacion, where);
  }

  @get('/areas-investigacion/{id}')
  @response(200, {
    description: 'AreaInvestigacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AreaInvestigacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AreaInvestigacion, {exclude: 'where'}) filter?: FilterExcludingWhere<AreaInvestigacion>
  ): Promise<AreaInvestigacion> {
    return this.areaInvestigacionRepository.findById(id, filter);
  }

  @patch('/areas-investigacion/{id}')
  @response(204, {
    description: 'AreaInvestigacion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaInvestigacion, {partial: true}),
        },
      },
    })
    areaInvestigacion: AreaInvestigacion,
  ): Promise<void> {
    await this.areaInvestigacionRepository.updateById(id, areaInvestigacion);
  }

  @put('/areas-investigacion/{id}')
  @response(204, {
    description: 'AreaInvestigacion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() areaInvestigacion: AreaInvestigacion,
  ): Promise<void> {
    await this.areaInvestigacionRepository.replaceById(id, areaInvestigacion);
  }

  @del('/areas-investigacion/{id}')
  @response(204, {
    description: 'AreaInvestigacion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.areaInvestigacionRepository.deleteById(id);
  }
}
