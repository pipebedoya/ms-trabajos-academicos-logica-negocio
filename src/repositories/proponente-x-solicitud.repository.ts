import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ProponenteXSolicitud, ProponenteXSolicitudRelations} from '../models';

export class ProponenteXSolicitudRepository extends DefaultCrudRepository<
  ProponenteXSolicitud,
  typeof ProponenteXSolicitud.prototype.id,
  ProponenteXSolicitudRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(ProponenteXSolicitud, dataSource);
  }
}
