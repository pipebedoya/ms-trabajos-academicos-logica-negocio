import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ComiteXSolicitud, ComiteXSolicitudRelations} from '../models';

export class ComiteXSolicitudRepository extends DefaultCrudRepository<
  ComiteXSolicitud,
  typeof ComiteXSolicitud.prototype.id,
  ComiteXSolicitudRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(ComiteXSolicitud, dataSource);
  }
}
