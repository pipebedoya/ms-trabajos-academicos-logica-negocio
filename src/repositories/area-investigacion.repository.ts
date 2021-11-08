import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {AreaInvestigacion, AreaInvestigacionRelations, Jurado, JuradoXAreaInvestigacion, Solicitud} from '../models';
import {JuradoXAreaInvestigacionRepository} from './jurado-x-area-investigacion.repository';
import {JuradoRepository} from './jurado.repository';
import {SolicitudRepository} from './solicitud.repository';

export class AreaInvestigacionRepository extends DefaultCrudRepository<
  AreaInvestigacion,
  typeof AreaInvestigacion.prototype.id,
  AreaInvestigacionRelations
> {

  public readonly jurados: HasManyThroughRepositoryFactory<Jurado, typeof Jurado.prototype.id,
          JuradoXAreaInvestigacion,
          typeof AreaInvestigacion.prototype.id
        >;

  public readonly solicitudes: HasManyRepositoryFactory<Solicitud, typeof AreaInvestigacion.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('JuradoXAreaInvestigacionRepository') protected juradoXAreaInvestigacionRepositoryGetter: Getter<JuradoXAreaInvestigacionRepository>, @repository.getter('JuradoRepository') protected juradoRepositoryGetter: Getter<JuradoRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(AreaInvestigacion, dataSource);
    this.solicitudes = this.createHasManyRepositoryFactoryFor('solicitudes', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicitudes', this.solicitudes.inclusionResolver);
    this.jurados = this.createHasManyThroughRepositoryFactoryFor('jurados', juradoRepositoryGetter, juradoXAreaInvestigacionRepositoryGetter,);
    this.registerInclusionResolver('jurados', this.jurados.inclusionResolver);
  }
}
