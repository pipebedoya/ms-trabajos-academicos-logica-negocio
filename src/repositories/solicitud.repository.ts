import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Solicitud, SolicitudRelations, Proponente, ProponenteXSolicitud, Recordatorio, TipoComite, ComiteXSolicitud} from '../models';
import {ProponenteXSolicitudRepository} from './proponente-x-solicitud.repository';
import {ProponenteRepository} from './proponente.repository';
import {RecordatorioRepository} from './recordatorio.repository';
import {ComiteXSolicitudRepository} from './comite-x-solicitud.repository';
import {TipoComiteRepository} from './tipo-comite.repository';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype.id,
  SolicitudRelations
> {

  public readonly proponentes: HasManyThroughRepositoryFactory<Proponente, typeof Proponente.prototype.id,
          ProponenteXSolicitud,
          typeof Solicitud.prototype.id
        >;

  public readonly recordatorios: HasManyRepositoryFactory<Recordatorio, typeof Solicitud.prototype.id>;

  public readonly tipoComites: HasManyThroughRepositoryFactory<TipoComite, typeof TipoComite.prototype.id,
          ComiteXSolicitud,
          typeof Solicitud.prototype.id
        >;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('ProponenteXSolicitudRepository') protected proponenteXSolicitudRepositoryGetter: Getter<ProponenteXSolicitudRepository>, @repository.getter('ProponenteRepository') protected proponenteRepositoryGetter: Getter<ProponenteRepository>, @repository.getter('RecordatorioRepository') protected recordatorioRepositoryGetter: Getter<RecordatorioRepository>, @repository.getter('ComiteXSolicitudRepository') protected comiteXSolicitudRepositoryGetter: Getter<ComiteXSolicitudRepository>, @repository.getter('TipoComiteRepository') protected tipoComiteRepositoryGetter: Getter<TipoComiteRepository>,
  ) {
    super(Solicitud, dataSource);
    this.tipoComites = this.createHasManyThroughRepositoryFactoryFor('tipoComites', tipoComiteRepositoryGetter, comiteXSolicitudRepositoryGetter,);
    this.registerInclusionResolver('tipoComites', this.tipoComites.inclusionResolver);
    this.recordatorios = this.createHasManyRepositoryFactoryFor('recordatorios', recordatorioRepositoryGetter,);
    this.registerInclusionResolver('recordatorios', this.recordatorios.inclusionResolver);
    this.proponentes = this.createHasManyThroughRepositoryFactoryFor('proponentes', proponenteRepositoryGetter, proponenteXSolicitudRepositoryGetter,);
    this.registerInclusionResolver('proponentes', this.proponentes.inclusionResolver);
  }
}
