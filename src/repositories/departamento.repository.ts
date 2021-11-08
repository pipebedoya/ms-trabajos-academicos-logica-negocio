import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Departamento, DepartamentoRelations, Proponente, DepartamentoXProponente} from '../models';
import {DepartamentoXProponenteRepository} from './departamento-x-proponente.repository';
import {ProponenteRepository} from './proponente.repository';

export class DepartamentoRepository extends DefaultCrudRepository<
  Departamento,
  typeof Departamento.prototype.id,
  DepartamentoRelations
> {

  public readonly proponentes: HasManyThroughRepositoryFactory<Proponente, typeof Proponente.prototype.id,
          DepartamentoXProponente,
          typeof Departamento.prototype.id
        >;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('DepartamentoXProponenteRepository') protected departamentoXProponenteRepositoryGetter: Getter<DepartamentoXProponenteRepository>, @repository.getter('ProponenteRepository') protected proponenteRepositoryGetter: Getter<ProponenteRepository>,
  ) {
    super(Departamento, dataSource);
    this.proponentes = this.createHasManyThroughRepositoryFactoryFor('proponentes', proponenteRepositoryGetter, departamentoXProponenteRepositoryGetter,);
    this.registerInclusionResolver('proponentes', this.proponentes.inclusionResolver);
  }
}
