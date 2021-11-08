import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Formato, FormatoRelations, TipoSolicitud} from '../models';
import {TipoSolicitudRepository} from './tipo-solicitud.repository';

export class FormatoRepository extends DefaultCrudRepository<
  Formato,
  typeof Formato.prototype.id,
  FormatoRelations
> {

  public readonly tipoSolicitud: HasOneRepositoryFactory<TipoSolicitud, typeof Formato.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TipoSolicitudRepository') protected tipoSolicitudRepositoryGetter: Getter<TipoSolicitudRepository>,
  ) {
    super(Formato, dataSource);
    this.tipoSolicitud = this.createHasOneRepositoryFactoryFor('tipoSolicitud', tipoSolicitudRepositoryGetter);
    this.registerInclusionResolver('tipoSolicitud', this.tipoSolicitud.inclusionResolver);
  }
}
