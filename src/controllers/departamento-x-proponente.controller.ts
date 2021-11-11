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
import {DepartamentoXProponente} from '../models';
import {DepartamentoXProponenteRepository} from '../repositories';

export class DepartamentoXProponenteController {
  constructor(
    @repository(DepartamentoXProponenteRepository)
    public departamentoXProponenteRepository : DepartamentoXProponenteRepository,
  ) {}

  @post('/departamentos-x-proponentes')
  @response(200, {
    description: 'DepartamentoXProponente model instance',
    content: {'application/json': {schema: getModelSchemaRef(DepartamentoXProponente)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DepartamentoXProponente, {
            title: 'NewDepartamentoXProponente',
            exclude: ['id'],
          }),
        },
      },
    })
    departamentoXProponente: Omit<DepartamentoXProponente, 'id'>,
  ): Promise<DepartamentoXProponente> {
    return this.departamentoXProponenteRepository.create(departamentoXProponente);
  }

  @get('/departamentos-x-proponentes/count')
  @response(200, {
    description: 'DepartamentoXProponente model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DepartamentoXProponente) where?: Where<DepartamentoXProponente>,
  ): Promise<Count> {
    return this.departamentoXProponenteRepository.count(where);
  }

  @get('/departamentos-x-proponentes')
  @response(200, {
    description: 'Array of DepartamentoXProponente model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DepartamentoXProponente, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DepartamentoXProponente) filter?: Filter<DepartamentoXProponente>,
  ): Promise<DepartamentoXProponente[]> {
    return this.departamentoXProponenteRepository.find(filter);
  }

  @patch('/departamentos-x-proponentes')
  @response(200, {
    description: 'DepartamentoXProponente PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DepartamentoXProponente, {partial: true}),
        },
      },
    })
    departamentoXProponente: DepartamentoXProponente,
    @param.where(DepartamentoXProponente) where?: Where<DepartamentoXProponente>,
  ): Promise<Count> {
    return this.departamentoXProponenteRepository.updateAll(departamentoXProponente, where);
  }

  @get('/departamentos-x-proponentes/{id}')
  @response(200, {
    description: 'DepartamentoXProponente model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DepartamentoXProponente, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(DepartamentoXProponente, {exclude: 'where'}) filter?: FilterExcludingWhere<DepartamentoXProponente>
  ): Promise<DepartamentoXProponente> {
    return this.departamentoXProponenteRepository.findById(id, filter);
  }

  @patch('/departamentos-x-proponentes/{id}')
  @response(204, {
    description: 'DepartamentoXProponente PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DepartamentoXProponente, {partial: true}),
        },
      },
    })
    departamentoXProponente: DepartamentoXProponente,
  ): Promise<void> {
    await this.departamentoXProponenteRepository.updateById(id, departamentoXProponente);
  }

  @put('/departamentos-x-proponentes/{id}')
  @response(204, {
    description: 'DepartamentoXProponente PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() departamentoXProponente: DepartamentoXProponente,
  ): Promise<void> {
    await this.departamentoXProponenteRepository.replaceById(id, departamentoXProponente);
  }

  @del('/departamentos-x-proponentes/{id}')
  @response(204, {
    description: 'DepartamentoXProponente DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.departamentoXProponenteRepository.deleteById(id);
  }
}
