import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Jurado, JuradoRelations, UsuarioJurado, Solicitud, EvaluaSolicitud} from '../models';
import {UsuarioJuradoRepository} from './usuario-jurado.repository';
import {EvaluaSolicitudRepository} from './evalua-solicitud.repository';
import {SolicitudRepository} from './solicitud.repository';

export class JuradoRepository extends DefaultCrudRepository<
  Jurado,
  typeof Jurado.prototype.id,
  JuradoRelations
> {

  public readonly tiene: HasOneRepositoryFactory<UsuarioJurado, typeof Jurado.prototype.id>;

  public readonly solicitudes: HasManyThroughRepositoryFactory<Solicitud, typeof Solicitud.prototype.id,
          EvaluaSolicitud,
          typeof Jurado.prototype.id
        >;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('UsuarioJuradoRepository') protected usuarioJuradoRepositoryGetter: Getter<UsuarioJuradoRepository>, @repository.getter('EvaluaSolicitudRepository') protected evaluaSolicitudRepositoryGetter: Getter<EvaluaSolicitudRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Jurado, dataSource);
    this.solicitudes = this.createHasManyThroughRepositoryFactoryFor('solicitudes', solicitudRepositoryGetter, evaluaSolicitudRepositoryGetter,);
    this.registerInclusionResolver('solicitudes', this.solicitudes.inclusionResolver);
    this.tiene = this.createHasOneRepositoryFactoryFor('tiene', usuarioJuradoRepositoryGetter);
    this.registerInclusionResolver('tiene', this.tiene.inclusionResolver);
  }
}
