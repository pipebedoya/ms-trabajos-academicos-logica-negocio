import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {JuradoXAreaInvestigacion, JuradoXAreaInvestigacionRelations} from '../models';

export class JuradoXAreaInvestigacionRepository extends DefaultCrudRepository<
  JuradoXAreaInvestigacion,
  typeof JuradoXAreaInvestigacion.prototype.id,
  JuradoXAreaInvestigacionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(JuradoXAreaInvestigacion, dataSource);
  }
}
