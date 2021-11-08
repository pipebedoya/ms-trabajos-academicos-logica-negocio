import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {EvaluaSolicitud, EvaluaSolicitudRelations, ResultadoEvaluacion} from '../models';
import {ResultadoEvaluacionRepository} from './resultado-evaluacion.repository';

export class EvaluaSolicitudRepository extends DefaultCrudRepository<
  EvaluaSolicitud,
  typeof EvaluaSolicitud.prototype.id,
  EvaluaSolicitudRelations
> {

  public readonly resultadoEvaluacion: HasOneRepositoryFactory<ResultadoEvaluacion, typeof EvaluaSolicitud.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('ResultadoEvaluacionRepository') protected resultadoEvaluacionRepositoryGetter: Getter<ResultadoEvaluacionRepository>,
  ) {
    super(EvaluaSolicitud, dataSource);
    this.resultadoEvaluacion = this.createHasOneRepositoryFactoryFor('resultadoEvaluacion', resultadoEvaluacionRepositoryGetter);
    this.registerInclusionResolver('resultadoEvaluacion', this.resultadoEvaluacion.inclusionResolver);
  }
}
