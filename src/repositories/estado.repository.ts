import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Estado, EstadoRelations, Solicitud, EvaluaSolicitud, ResultadoEvaluacion} from '../models';
import {SolicitudRepository} from './solicitud.repository';
import {EvaluaSolicitudRepository} from './evalua-solicitud.repository';
import {ResultadoEvaluacionRepository} from './resultado-evaluacion.repository';

export class EstadoRepository extends DefaultCrudRepository<
  Estado,
  typeof Estado.prototype.id,
  EstadoRelations
> {

  public readonly solicitud: HasOneRepositoryFactory<Solicitud, typeof Estado.prototype.id>;

  public readonly evaluaSolicitud: HasOneRepositoryFactory<EvaluaSolicitud, typeof Estado.prototype.id>;

  public readonly resultadoEvaluacion: HasOneRepositoryFactory<ResultadoEvaluacion, typeof Estado.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>, @repository.getter('EvaluaSolicitudRepository') protected evaluaSolicitudRepositoryGetter: Getter<EvaluaSolicitudRepository>, @repository.getter('ResultadoEvaluacionRepository') protected resultadoEvaluacionRepositoryGetter: Getter<ResultadoEvaluacionRepository>,
  ) {
    super(Estado, dataSource);
    this.resultadoEvaluacion = this.createHasOneRepositoryFactoryFor('resultadoEvaluacion', resultadoEvaluacionRepositoryGetter);
    this.registerInclusionResolver('resultadoEvaluacion', this.resultadoEvaluacion.inclusionResolver);
    this.evaluaSolicitud = this.createHasOneRepositoryFactoryFor('evaluaSolicitud', evaluaSolicitudRepositoryGetter);
    this.registerInclusionResolver('evaluaSolicitud', this.evaluaSolicitud.inclusionResolver);
    this.solicitud = this.createHasOneRepositoryFactoryFor('solicitud', solicitudRepositoryGetter);
    this.registerInclusionResolver('solicitud', this.solicitud.inclusionResolver);
  }
}
