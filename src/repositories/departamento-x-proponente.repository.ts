import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {DepartamentoXProponente, DepartamentoXProponenteRelations} from '../models';

export class DepartamentoXProponenteRepository extends DefaultCrudRepository<
  DepartamentoXProponente,
  typeof DepartamentoXProponente.prototype.id,
  DepartamentoXProponenteRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(DepartamentoXProponente, dataSource);
  }
}
